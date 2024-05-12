import { Component } from '@angular/core';

import { MessageService } from "primeng/api";

import { Corredormen } from 'src/app/domain/custom/corredormen';

import { CorredorService } from 'src/app/service/corredor.service';
import baserUrl from 'src/app/service/helper';


@Component({
  selector: 'app-membrecia',
  templateUrl: './membrecia.component.html',
  styleUrls: ['./membrecia.component.css'],
  providers: [MessageService]
})
export class MembreciaComponent {
  mediaLocation = `${baserUrl}/media/`;
  buscado="";
   
  corredor!:Corredormen;
  inscripto:boolean=false;

  

constructor(private messageService: MessageService, private corredorService: CorredorService
   ) { }

ngOnInit(): void {
}

formSubmit() {


  if (this.buscado.trim() == '' || this.buscado.trim() == null) {
    /* console.log('Click en el boton de login'+this.loginData.username);*/

    this.messageService.add({
      severity: "error",
      summary: "Login",
      detail: "No se encontro el numero de CI del corredor, complete sin puntos."
    });

    return;
  }

  this.corredorService.pubObtenerCorredorCi(this.buscado).subscribe(
    (data: any) => {
      
      this.corredor=data;
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
