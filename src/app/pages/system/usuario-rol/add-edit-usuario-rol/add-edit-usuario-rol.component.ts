import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { UsuarioRolService } from 'src/app/service/usuario-rol.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { RolService } from 'src/app/service/rol.service';

@Component({
  selector: 'app-add-edit-usuario-rol',
  templateUrl: './add-edit-usuario-rol.component.html',
  styleUrls: ['./add-edit-usuario-rol.component.css']
})
export class AddEditUsuarioRolComponent  implements OnInit, OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedUsuarioRol:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  
  
  usuario={
    idusuario: 0,
    
  };
  rol={
    idrol: 0,
    
  };
  usuarios:any[]=[];
  roles:any[]=[];

  usuarioRolForm = this.fb.group({
    idusuarioRol:[null],
    usuario: [this.usuario],
    rol:[this.rol],
   
  });
  
  

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private usuarioRolService: UsuarioRolService,
    private usuarioService: UsuarioService,
    private rolService: RolService

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    

    if (this.selectedUsuarioRol){
      this.modalType="Guardar";

      this.usuarioRolForm.patchValue(this.selectedUsuarioRol);
      console.log(this.selectedUsuarioRol);
    
    }else{
      
      this.usuarioRolForm.reset({
        usuario:this.usuario,
        rol:this.rol,

      });

      this.modalType="Agregar";
    }

  }

  ngOnInit(): void {


    this.usuarioService.listarUsuarioes().subscribe(
      {next:  (datos: any) => {
        this.usuarios=datos;
        this.usuario = datos[0];

      }, error:(error) => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Usuario",
          detail: "Error al cargar el Usuario"
        }
      );
      },
      complete: () => {
        console.log('Completo usuarios');

      }
    
  });

  this.rolService.listarRoles().subscribe(
    {next:  (datos: any) => {
      this.roles=datos;
      this.rol = datos[0];

    }, error:(error) => {
      console.log(error);
      this.messageService.add({
        severity: "error",
        summary: "Rol",
        detail: "Error al cargar el Rol"
      }
    );
    },
    complete: () => {
      console.log('Completo roles');

    }
  });

  }
  

  closeModal() {
    this.usuarioRolForm.reset();
    this.clickClose.emit(true);
  }

  mostrarVarUsuarioRol() {
    
  }

  addEditUsuarioRol() {

    console.log(this.usuarioRolForm.value);

    if (this.selectedUsuarioRol){

      this.usuarioRolService.actualizarUsuarioRol(this.usuarioRolForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La usuario ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL UsuarioRol"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de usuario', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar UsuarioRol');

          }
        });


    }
    else {

      this.usuarioRolService.agregarUsuarioRol(this.usuarioRolForm.value).subscribe(
        {
          next: (dato) => {
  
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El usuarioRol ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la usuarioRol', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      );
    }

  }

  

}
