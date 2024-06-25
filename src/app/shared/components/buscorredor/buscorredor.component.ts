import { Component, EventEmitter,  Input,  Output } from '@angular/core';
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-buscorredor',
  templateUrl: './buscorredor.component.html',
  styleUrls: ['./buscorredor.component.css'],
  providers: [MessageService]
})
export class BuscorredorComponent  {
  
  buscado:string="";

  @Input() title: any;
  @Input() cantletter!: number;
  
  @Output() clickSearch: EventEmitter<any> = new EventEmitter<any>();

  

constructor(private messageService: MessageService) { }
  

formSubmit() {
  
var cantidad=this.cantletter+1;

  if (this.buscado.length <= this.cantletter) {
    /* console.log('Click en el boton de login'+this.loginData.username);*/

    this.messageService.add({
      severity: "error",
      summary: "Login",
      detail: "Ingrese por lo menos "+cantidad+" caracteres para buscar!!"
    });

    return;
  }

  
  this.clickSearch.emit(this.buscado);

}

}
