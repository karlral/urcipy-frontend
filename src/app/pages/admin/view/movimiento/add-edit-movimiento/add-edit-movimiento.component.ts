import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { Regional } from 'src/app/domain/regional';
import { MovimientoService } from 'src/app/service/movimiento.service';
import system from 'src/app/service/helpersys';
import { Concepto } from 'src/app/domain/concepto';
import { LoginService } from 'src/app/service/login.service';
import { ConceptoService } from 'src/app/service/concepto.service';
import { Usuario } from 'src/app/domain/usuario';

@Component({
  selector: 'app-add-edit-movimiento',
  templateUrl: './add-edit-movimiento.component.html',
  styleUrls: ['./add-edit-movimiento.component.css']
})
export class AddEditMovimientoComponent  implements OnInit, OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedMovimiento:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  user:any=null;
  
  fecha = new Date();

  usuario: Usuario = {
    idusuario: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    perfil: '',
    email: '',
    username: '',
    password: '',
    enabled: false
  }
  
  regional:Regional={
    idregional: system,
    nomregional: '',
    nomcorto: '',
    telefono: '',
    direccion: '',
    email: '',
    ano: 0,
    presentacion: '',
    logo: ''
  }

  concepto:Concepto={
    idconcepto: 0,
    nomconcepto: '',
    tipo: 0,
    regional: this.regional
  };

  conceptos:Concepto[]=[];


  
  corredor={
    idcorredor: 1,
    verificar: 0,
    carnet: '',
    carnetatras: '',
    tipocat: 0,
    licencia: 0,
    modificar: false,
    gruposanguineo: '',
    puntua: 0,
    fecmodi: this.fecha,
    montopuntua: 0,
    carnetfpc: 0,
    observacion: '',
    catalianza: false
  };

  movimientoForm = this.fb.group({
    idmovimiento:[null],
    fecha: [this.fecha, Validators.required],
    entrada: [0],
    salida: [0],
    concepto: [this.concepto],
    corredor: [this.corredor],
    usuario:[this.usuario],
    monto:[0]
  });
  
  

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private movimientoService: MovimientoService,
    private login:LoginService,
    private conceptoService:ConceptoService,

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.user=this.login.getUser();
    
    this.usuario.idusuario = this.user.idusuario;
    

    if (this.selectedMovimiento){
      this.modalType="Guardar";
      
      this.selectedMovimiento.usuario =null;
      this.selectedMovimiento.corredor =null;

      this.movimientoForm.patchValue(this.selectedMovimiento);

      const fecha2= new Date(this.selectedMovimiento.fecha);

      this.movimientoForm.controls['fecha'].setValue(fecha2);

      this.asignarTipoMontoEntrada();

    }else{
      
      this.movimientoForm.reset({
    
        fecha:this.fecha,
        entrada:0,
        salida:0,
        concepto:this.concepto,
        corredor:this.corredor,
        usuario:this.usuario,
        monto:0,

      });

      this.modalType="Agregar";
    }

  }

  ngOnInit(): void {
    this.user=this.login.getUser();
    
    this.usuario.idusuario = this.user.idusuario;
    this.usuario.enabled=this.user.enabled;

    this.conceptoService.listarConceptoes().subscribe(
      {next:  (datos: any) => {
        this.conceptos=datos;
        this.concepto = datos[0];
     
      }, error:(error) => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Concepto",
          detail: "Error al cargar el Concepto"
        }
      );
      },
      complete: () => {
        console.log('Completo conceptos');

      }
    
  });

  }
  

  closeModal() {
    this.movimientoForm.reset();
    this.clickClose.emit(true);
  }

  mostrarVarMovimiento() {
    
  }

  addEditMovimiento() {

    this.asignarTipoMontoSalida();
    console.log(this.movimientoForm.value);

    if (this.selectedMovimiento){

      this.movimientoForm.controls['usuario'].setValue(this.usuario);
      this.movimientoForm.controls['corredor'].setValue(this.corredor);
      this.movimientoService.actualizarMovimiento(this.movimientoForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La evento ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL Movimiento"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de evento', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar Movimiento');

          }
        });


    }
    else {

      this.movimientoService.agregarMovimiento(this.movimientoForm.value).subscribe(
        {
          next: (dato) => {
  
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El movimiento ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la movimiento', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      );
    }

  }

  asignarTipoMontoEntrada(){
    
      let montoasignado=this.selectedMovimiento.entrada;
      let tipo=this.selectedMovimiento.concepto.tipo;
      
      if(tipo==1){
        montoasignado=this.selectedMovimiento.entrada;
        this.movimientoForm.controls['monto'].setValue(montoasignado);

      }else{
        montoasignado=this.selectedMovimiento.salida;
        this.movimientoForm.controls['monto'].setValue(montoasignado);
      }
    
  }
  
  asignarTipoMontoSalida(){
 
      let montoasignado=this.movimientoForm.controls['monto'].value;
      let tipo=this.movimientoForm.controls['concepto'].value?.tipo;
      this.movimientoForm.controls['entrada'].setValue(0);
      this.movimientoForm.controls['salida'].setValue(0);
      if(tipo==1){
        this.movimientoForm.controls['entrada'].setValue(montoasignado);

      }else{
        this.movimientoForm.controls['salida'].setValue(montoasignado);
      }
    
  }
  

}
