import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent {
  public user={
    username:'',
    password:'',
    nombre:'',
    apellido:'',
    email:'',
    telefono:''
  }

  constructor(private userService:UserService,private messageService: MessageService) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username==null){
     
      this.messageService.add({ severity: 'info', summary: 'Aceptar', detail: 'El nombre de usuario es requerido', life: 3000 });
      return;
    }

    if(this.user.nombre == '' || this.user.nombre==null){
      //alert('El nombre de usuario es requerido');
      this.messageService.add({ severity: 'info', summary: 'Aceptar', detail: 'El nombre de la persona es requerido', life: 3000 });

      return;
    }
    
    this.userService.anadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
//        alert('Usuario guardado con exito');
        this.messageService.add({ severity: 'success', summary: 'Aceptar', detail: 'Usuario guaradado con exito', life: 3000 });

      },(error)=>{
        console.log(error);
        //alert('Ha ocurrido un error en el sistema');
        this.messageService.add({ severity: 'error', summary: 'Aceptar', detail: 'Ha ocurrido un error al guardar', life: 3000 });
      }
    )

  }

}
