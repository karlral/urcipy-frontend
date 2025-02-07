import { Component } from '@angular/core';

import { MessageService } from "primeng/api";

import { Corredormen } from 'src/app/domain/custom/corredormen';

import { CorredorService } from 'src/app/service/corredor.service';
import baserUrl from 'src/app/service/helper';
import { SystemService } from 'src/app/service/system.service';


@Component({
  selector: 'app-membrecia',
  templateUrl: './membrecia.component.html',
  styleUrls: ['./membrecia.component.css'],
  providers: [MessageService]
})
export class MembreciaComponent {
  mediaLocation = `${baserUrl}/media/`;
  
 ci="";

  corredor!:Corredormen;
  inscripto:boolean=false;
  anho:any;
  

constructor(private messageService: MessageService, 
  private corredorService: CorredorService,
  private systemService:SystemService
   ) { }

ngOnInit(): void {
}

formSubmit(buscado:string) {
  
  this.ci=buscado;
  
  this.corredorService.pubObtenerCorredorCi(buscado).subscribe(
    (data: any) => {
      
      this.corredor=data;
      this.anho=this.systemService.getAno();
      console.log(this.anho);

      if(data==null){
        
        this.messageService.add({
          severity: "info",
          summary: "Atencion",
          detail: "No se encontro  Membresia URCI con este numero de C.I."
        });
        this.inscripto=false;
      }else{
      
        this.inscripto=true;
        
      }
      

      

    }, (error) => {
      console.log(error);
      
      this.messageService.add({
        key: 'bc',
        severity: "info",
        summary: "Atencion",
        detail: "No se encontro  Membresia URCI con este numero de C.I."
      });

    }
  )


}

}
