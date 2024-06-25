import { Component} from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Corredor } from 'src/app/domain/corredor';
import { CorredorService } from 'src/app/service/corredor.service';

@Component({
  selector: 'app-corre-ci',
  templateUrl: './corre-ci.component.html',
  styleUrls: ['./corre-ci.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class CorreCiComponent  {
 
   selectedCorredor:any=null;
 
  
  displaySearch=true;
  buscado:string="";

  constructor( private messageService: MessageService,
    private corredorService: CorredorService,
    private confirmationService:ConfirmationService
    
    ) { }
 

 
  showModal(){
    this.selectedCorredor=null;
    this.displaySearch=false;

  }
  

  hideModal(isClosed:boolean){
    this.displaySearch=isClosed;
  }

  corredorSearch(buscado:string){
    console.log('Buscamos la cantidad de registros con '+buscado);
    this.displaySearch=false;
    this.corredorService.obtenerCorredorCi(buscado).subscribe(
      {
        next: (dato: Corredor) => {
          this.selectedCorredor = dato;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Corredor",
            detail: "Error al cargar la corredor"
          });
        },
        complete: () => console.info('completo corredor')
      });

  }

  showSearch(){
    this.buscado="";
    this.displaySearch=true;
  }

 

}