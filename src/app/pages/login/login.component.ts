import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { MessageService } from "primeng/api";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers: [MessageService]
})
export class LoginComponent {

  loginData = {
    "username": '',
    "password": ''
  }

  constructor(private messageService: MessageService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit() {


    if (this.loginData.username.trim() == '' || this.loginData.username.trim() == null) {
      /* console.log('Click en el boton de login'+this.loginData.username);*/

      this.messageService.add({
        severity: "error",
        summary: "Login",
        detail: "El nombre de usuario es requerido!!"
      });

      return;
    }

    if (this.loginData.password.trim() == '' || this.loginData.password.trim() == null) {

      
      this.messageService.add({
        severity: "error",
        summary: "Login",
        detail: "La contraseña es requerida"
      });
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);
        this.loginService.loginUser(data.token);

        /*** probamos  */
        console.log("Cargamos el token");
        if (this.loginService.isLoggedIn()) {
          console.log("Se registro el token");

        }
        /*** */
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          console.log(user);
          console.log("Cargamos el usuario");

          /**Prueba */

          if (this.loginService.isUserIn()) {
            console.log("Se registro el Usuario");

          }
          /** */

          if (this.loginService.getUserRole() == "ADMINISTRADOR") {
            //dashboard admin
            //window.location.href='/admin'; 
            this.router.navigate(['admin/acceso']);
            this.loginService.loginStatusSubjec.next(true);
          } else if (this.loginService.getUserRole() == "NORMAL") {
            // user dashboard
            //window.location.href='/user-dashboard';
            console.log('Entramos en el usuario');
            this.router.navigate(['user-dashboard']);
            this.loginService.loginStatusSubjec.next(true);
          } else {
            this.loginService.logout();
          }

        }, (error) => {
          console.log(error);

          this.messageService.add({
            severity: "error",
            summary: "Login",
            detail: "Usuario no registrado, vuelva a intentar!!"
          });

        });

      }, (error) => {
        console.log(error);
        
        this.messageService.add({
          severity: "error",
          summary: "Login",
          detail: "Credencial invalido, vuelva a intentar!!"
        });

      }
    )

  }
  goresumen(){
    this.router.navigate(['/resumen']);
  }
}
