import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { MovimientoService } from 'src/app/service/movimiento.service';
import { LoginService } from 'src/app/service/login.service';
import { CorredorService } from 'src/app/service/corredor.service';
import system from 'src/app/service/helpersys';
import { Puncorredor } from 'src/app/domain/custom/puncorredor';
import { ParticipanteService } from 'src/app/service/participante.service';
import { el } from 'date-fns/locale';

@Component({
  selector: 'app-add-ranking',
  templateUrl: './add-ranking.component.html',
  styleUrls: ['./add-ranking.component.css']
})
export class AddRankingComponent  implements OnInit, OnChanges {
  @Input() displayAddModal: boolean = true;
  @Input() selectedCorredor:any=null;
  
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>();
  

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
    entrada: [20000],
    salida: [0],
    concepto: [this.concepto],
    corredor: [this.corredor],
    usuario:[this.usuario],
    ci:['']
  });

   corredores:Puncorredor[]=[];
    disableCarga=true;
   
  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private movimientoService: MovimientoService,
    private login:LoginService,
    

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
    this.disableCarga=false;
    this.movimientoForm.controls['ci'].setValue(this.selectedCorredor.ci);
    this.corredor.idcorredor=this.selectedCorredor.idcorredor;
    this.movimientoForm.controls['corredor'].setValue(this.corredor);

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
        },
        complete: () => {
          console.log('Completo el busqueda de movimiento- colocacion de ranking');
        }
      });
  }

  guardarMovimiento(){
      this.movimientoService.agregarMovimiento(this.movimientoForm.value).subscribe(
        {
          next: (dato) => {
            
           
            this.clickAdd.emit(this.selectedCorredor);
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

  
 

  

}
