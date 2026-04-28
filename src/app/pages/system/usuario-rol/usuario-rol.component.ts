import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Usuario } from 'src/app/domain/usuario';
import { UsuarioRol } from 'src/app/domain/usuarioRol';
import { UsuarioRolService } from 'src/app/service/usuario-rol.service';

@Component({
  selector: 'app-usuario-rol',
  templateUrl: './usuario-rol.component.html',
  styleUrls: ['./usuario-rol.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class UsuarioRolComponent  implements OnInit {
  
  usuarioRoles: UsuarioRol[] = [];
  selectedUsuarioRol:any=null;
  displayAddEditModal=false;
  entradas:number=0;
  salidas:number=0;
   usuarios: Usuario[] = [];
   roles:any[]=[];

 

  constructor( private messageService: MessageService,
    private usuarioRolService: UsuarioRolService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.usuarioRolService.listarUsuarioRoles().subscribe(
      {
        next: (datos: UsuarioRol[]) => {
          this.usuarioRoles = datos.filter(ur => ur.rol.idrol !== 1);
          //console.log(datos);
          this.usuarios = this.usuarioRoles.map(ur => ur.usuario);
         // console.log(this.usuarios);

          this.roles = this.usuarioRoles.map(ur => ur.rol);
         // console.log(this.roles);
          this.roles = this.roles.filter((rol, index, self) => 
             index === self.findIndex((r) => r.idrol === rol.idrol));
        // console.log(this.roles);
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "UsuarioRol",
            detail: "Error al cargar la usuarioRol"
          });
        },
        complete: () => console.info('completo usuarioRol')
      });

  }
  
  showModal(){
    this.selectedUsuarioRol=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  editUsuarioRol(editData:any){
    this.selectedUsuarioRol=editData;
    this.displayAddEditModal=true;
  }

  saveUsuarioRolToList(newData:UsuarioRol){   
      this.usuarioRoles.unshift(newData);
      this.rellenarDataTable();
  }

  deleteUsuarioRol(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.usuario.usuario + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.usuarioRolService.eliminarUsuarioRol(deleteData.idusuarioRol).subscribe(
          {
            next: (data) => {


              //this.usuarioRoles = this.usuarioRoles.filter(val => val.idusuarioRol !== deleteData.idusuarioRol);
              this.rellenarDataTable();
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'UsuarioRol Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el usuarioRol', life: 3000 });

            },
            complete: () => {
              console.log('Completado');
            }
          }
        );


      }
    });
    
  }

  



}

