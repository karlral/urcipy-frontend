import { Component, EventEmitter,  Output } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from "primeng/api";
import { CorredorService } from 'src/app/service/corredor.service';

@Component({
  selector: 'app-buscorredor',
  templateUrl: './buscorredor.component.html',
  styleUrls: ['./buscorredor.component.css'],
  providers: [MessageService]
})
export class BuscorredorComponent  {
  
  buscado:string="";

  
  @Output() clickSearch: EventEmitter<any> = new EventEmitter<any>();

  

constructor(private messageService: MessageService, private corredorService: CorredorService, private router: Router) { }
  

formSubmit() {


  if (this.buscado.length <= 2) {
    /* console.log('Click en el boton de login'+this.loginData.username);*/

    this.messageService.add({
      severity: "error",
      summary: "Login",
      detail: "Ingrese por lo menos 3 letras para buscar!!"
    });

    return;
  }

  
  this.clickSearch.emit(this.buscado);

}

}
