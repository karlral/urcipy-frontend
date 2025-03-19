import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { MovimientoService } from 'src/app/service/movimiento.service';
import { LoginService } from 'src/app/service/login.service';
import { CorredorService } from 'src/app/service/corredor.service';
import system from 'src/app/service/helpersys';
import { Puncorredor } from 'src/app/domain/custom/puncorredor';
import { ParticipanteService } from 'src/app/service/participante.service';


@Component({
  selector: 'app-add-ranking',
  templateUrl: './add-ranking.component.html',
  styleUrls: ['./add-ranking.component.css']
})
export class AddRankingComponent  implements OnInit, OnChanges {
  @Input() displayAddModal: boolean = true;
  
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>();
  @Output() addNomcorredor: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  user:any=null;
  
  fecha = new Date();

  usuario = {
    idusuario: 0,
    enabled:true
  }
  
  concepto={
    idconcepto: system,
  };
  persona={
    nombre:'',
    apellido:'',
  }

  nombreCorredor='';

  corredor={
    idcorredor: system,
    persona:this.persona
  };
 monto :number=20000;
  movimientoForm = this.fb.group({
    idmovimiento:[null],
    fecha: [this.fecha, Validators.required],
    entrada: [{ value:20000, disabled: true}],
    salida: [0],
    concepto: [this.concepto],
    corredor: [this.corredor],
    usuario:[this.usuario],
    ci:['']
  });

   corredores:Puncorredor[]=[];
   
  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private movimientoService: MovimientoService,
    private login:LoginService,
    private corredorService:CorredorService,
   
    private participanteService:ParticipanteService

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.user=this.login.getUser();
    
    this.usuario.idusuario = this.user.idusuario;
    if(system==1){  
      this.monto=50000;
    }else{
      this.monto=20000;
    }
    
      this.movimientoForm.reset({
    
        fecha:this.fecha,
        entrada:this.monto,
        salida:0,
        concepto:this.concepto,
        corredor:this.corredor,
        usuario:this.usuario

      });
      this.modalType="Agregar";
  

  }

  ngOnInit(): void {
    this.user=this.login.getUser();
    this.usuario.idusuario = this.user.idusuario;
    this.usuario.enabled=this.user.enabled;
    
    this.movimientoForm.controls['usuario'].setValue(this.usuario);
  }
  
  closeModal() {
    this.movimientoForm.reset();
    this.clickClose.emit(true);
  }

  addMovimiento() {
      this.movimientoService.busMovimientosRankingPub(this.movimientoForm.get('ci')?.value).subscribe({
        next: (dato) => {
          if (dato){
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El corredor ya esta en el ranking', life: 3000 });
          }else{
            this.guardarMovimiento();
          }
        }, error: (error) => {
          console.log(error);
          this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la movimiento', life: 3000 }); 
        }
      });
  }

  guardarMovimiento(){
      this.movimientoService.agregarMovimiento(this.movimientoForm.value).subscribe(
        {
          next: (dato) => {
            
            this.addNomcorredor.emit(this.nombreCorredor);
            this.clickAdd.emit(dato);
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
      )

  }

  
  focusOutFunction(){ 
       
      const ci= this.movimientoForm.get('ci')?.value;
      
      this.corredorService.obtenerCorredorCi(ci).subscribe({
        next: (dato) => {
          
          if (dato){
            //console.log(dato);
            this.corredor.idcorredor=dato.idcorredor

           // this.movimientoForm.controls['corredor'].patchValue(this.corredor); 
            this.movimientoForm.controls['corredor'].setValue(this.corredor);
            
            this.nombreCorredor=dato.persona.nombre+" "+dato.persona.apellido;
 
            this.movimientoForm.get('entrada')?.enable();

          }else{
            this.nombreCorredor=" Nro. de Cedula no se encuentra";
            this.movimientoForm.get('entrada')?.disable();
            
          }
  
        
        }, error: (error) => {
          console.log(error);
          this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al Persona del corredor', life: 3000 });

        },
        complete: () => {
          console.log('Completo el busqueda de Persona');

        }
      });
      
    
  }  

  cargarMovimientoEvento(){
    let contar=0;
    this.participanteService.pubListarPuntajeCorredor().subscribe(
      {
        next: (datos: Puncorredor[]) => {
          this.corredores = datos;
          this.corredores.forEach(corre=>{
            this.corredor.idcorredor=corre.idcorredor;
            contar=contar+1;
            console.log('cant '+contar+' '+corre.corredor)
            this.movimientoForm.controls['corredor'].setValue(this.corredor);
            this.movimientoForm.get('entrada')?.enable();
            this.movimientoForm.controls['entrada'].setValue(20000);

            this.movimientoService.agregarMovimiento(this.movimientoForm.value).subscribe(
              {
                next: (dato) => {
          
                }, error: (error) => {
                  console.log(error);
                  this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la movimiento', life: 3000 });
      
                },
                complete: () => {
                  console.log('guardo ');
      
                }
      
              }
            );

            this.activaPuntuaCorredor(corre.idcorredor);

          });
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Movimiento",
            detail: "Error al cargar la movimiento"
          });
        },
        complete: () => console.info('completo movimiento')
      });
  
  }

  activaPuntuaCorredor(idcorredor:any){

    this.corredorService.puntuarCorredor(idcorredor).subscribe(
      {
        next: (data) => {
          this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Corredor Puntua', life: 3000 });
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al activar para puntuar el corredor', life: 3000 });
  
        },
        complete: () => {
          console.log('Completado Corredor Punta activado');
        }
      }
    );
  };

}
