import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Categoria } from 'src/app/domain/categoria';
import { Modalidad } from 'src/app/domain/modalidad';
import { Trayecto } from 'src/app/domain/trayecto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ModalidadService } from 'src/app/service/modalidad.service';
import { TrayectoService } from 'src/app/service/trayecto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class CategoriaComponent {


  categoriaes: Categoria[] = [];
  modalidades: Modalidad[] = [];

  // para agregar
trayecto :Trayecto={
  idtrayecto: 0,
  nomtrayecto: '',
  km: 0
}
modalidad :Modalidad={
  idmodalidad: 1,
  nommodalidad: ''
};

  categoria: Categoria = {
    idcategoria: 0,
    nomcategoria: '',
    activo: false,
    nomcorto: '',
    orden: 0,
    tanda: 0,
    ascenso: false,
    activonacional: 0,
    edadinicio: 0,
    edadfin: 0,
    sexo: 0,
    tipo: 0,
    trayecto: this.trayecto,
    horario: '',
    modalidad: this.modalidad,
    codigo: '',
    nomalternativo: ''
  };

  trayectos:Trayecto[]=[];


  submitted = false;
  categoriaDialog = false;
  
  tipos: any[] = [];
  tiposrun: any[] = [];
  

  constructor(private messageService: MessageService,private categoriaService: CategoriaService,
    private trayectoService: TrayectoService,
    private modalidadService: ModalidadService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.rellenarDataTable();
      this.tipos = [
        {label: 'PRINCIPAL', value: 1},
        {label: 'PRINCIPAL-ELITE', value: 2},
        {label: 'PROMOCIONAL', value: 3},
        {label: 'PROMOCIONAL+100K', value: 4}
    ];
    this.tiposrun = [
      {label: '20k', value: 1},
      {label: '10k', value: 2},
      {label: '5k', value: 3},
      {label: 'GENERAL', value: 4}
  ];
    //console.log(this.tipos);

    this.trayectoService.listarTrayectoes().subscribe(
      (dato:any) => {
        this.trayectos=dato;
       
      },(error) => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Trayecto",
          detail: "Error al cargar el Trayecto"
        });       
      }
    );
    this.modalidadService.listarModalidades().subscribe(
      (dato:any) => {
        this.modalidades=dato;
        //console.log(this.modalidades);
      },(error) => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Trayecto",
          detail: "Error al cargar el Trayecto"
        });       
      }
    );
  }

  rellenarDataTable(){
    this.categoriaService.listarCategoriaes().subscribe(
      {
        next: (dato: Categoria[]) => {
          this.categoriaes = dato;
          //console.log(this.categoriaes);
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Categoria",
            detail: "Error al cargar la categoria"
          });
        },
        complete: () => console.info('completo carga de categorias')
      });

  }
  private resetCategoria():Categoria{
    var cat: Categoria = {
      idcategoria: 0,
      nomcategoria: '',
      activo: false,
      nomcorto: '',
      orden: 0,
      tanda: 0,
      ascenso: false,
      activonacional: 0,
      edadinicio: 0,
      edadfin: 0,
      sexo: 0,
      tipo: 0,
      trayecto: this.trayecto,
      horario: '',
      modalidad: this.modalidad,
      codigo: '',
      nomalternativo: ''
    };
    return cat;
  }
  //para agregar nuevo
  openNew() {
    this.categoria = this.resetCategoria();
    this.submitted = false;
    this.categoriaDialog = true;
  }

  hideDialog() {
    this.categoriaDialog = false;
    this.submitted = false;
  }

  saveCategoria() {
    this.submitted = true;
    if (this.categoria.nomcategoria.trim() == '' || this.categoria.nomcategoria.trim() == null) {

      this.messageService.add({ severity: 'info', summary: 'Advertencia', detail: 'El nomcategoria es requerido!!', life: 3000 });
      return;
    }



    if (this.categoria.idcategoria) {
      
      this.categoriaService.actualizarCategoria(this.categoria).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La categoria ha sido actualizada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de categoria', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');
            this.rellenarDataTable();
          }
        });


    }
    else {

     

      this.categoriaService.agregarCategoria(this.categoria).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El categoria ha sido agregada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la categoria', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
            this.rellenarDataTable();
          }

        }
      )


    }

   
    this.categoriaDialog = false;
    this.categoria = this.resetCategoria();

  }


  editCategoria(regio: Categoria) {
    //this.categoria = { ...regio };
    this.categoria=regio;
    this.categoriaDialog = true;
    if(regio.modalidad.idmodalidad==2){
      this.tipos = [
        {label: '20k', value: 1},
        {label: '10k', value: 2},
        {label: ' 5k', value: 3},
        {label: 'GENERAL', value: 4}
      ];
    }else{
      this.tipos = [
        {label: 'PRINCIPAL', value: 1},
        {label: 'PRINCIPAL-ELITE', value: 2},
        {label: 'PROMOCIONAL', value: 3},
        {label: 'PROMOCIONAL+100K', value: 4}
       ];
    }
  }

  deleteCategoria(categoria: Categoria) {
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + categoria.nomcategoria + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.categoriaService.eliminarCategoria(categoria.idcategoria).subscribe(
          {
            next: (data) => {

              this.categoriaes = this.categoriaes.filter(val => val.idcategoria !== categoria.idcategoria);
              this.categoria = this.resetCategoria();
              
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Categoria Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el categoria', life: 3000 });

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
