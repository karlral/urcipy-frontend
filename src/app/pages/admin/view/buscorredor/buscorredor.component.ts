import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from "primeng/api";
import { CorredorService } from 'src/app/service/corredor.service';

@Component({
  selector: 'app-buscorredor',
  templateUrl: './buscorredor.component.html',
  styleUrls: ['./buscorredor.component.css'],
  providers: [MessageService]
})
export class BuscorredorComponent {
buscado="";

constructor(private messageService: MessageService, private corredorService: CorredorService, private router: Router) { }

ngOnInit(): void {
}

formSubmit() {


  if (this.buscado.trim() == '' || this.buscado.trim() == null) {
    /* console.log('Click en el boton de login'+this.loginData.username);*/

    this.messageService.add({
      severity: "error",
      summary: "Login",
      detail: "Coloque el valor buscado!!"
    });

    return;
  }

  /*this.loginService.generateToken(this.loginData).subscribe(
    (data: any) => {
      
      this.loginService.loginUser(data.token);

      
      console.log("Cargamos el token");
      if (this.loginService.isLoggedIn()) {
        console.log("Se registro el token");

      }
     
     
    }, (error) => {
      console.log(error);
      
      this.messageService.add({
        severity: "error",
        summary: "Login",
        detail: "Credencial invalido, vuelva a intentar!!"
      });

    }
  )

*/

}

}
