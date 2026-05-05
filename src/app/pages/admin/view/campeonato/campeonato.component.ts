import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Campeonato } from 'src/app/domain/campeonato';
import { CampeonatoService } from 'src/app/service/campeonato.service';
import baserUrl from 'src/app/service/helper';


@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrls: ['./campeonato.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class CampeonatoComponent implements OnInit {
  mediaLocation = `${baserUrl}/media/`;
  campeonatoes: Campeonato[] = [];
  selectedCampeonato:any=null;
  displayAddEditModal=false;
  

  constructor( private messageService: MessageService,
    private campeonatoService: CampeonatoService,
    private confirmationService:ConfirmationService,
    
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
    

  }

  

  rellenarDataTable(){
    this.campeonatoService.listarCampeonatoes().subscribe(
      {
        next: (datos: Campeonato[]) => {
          this.campeonatoes = datos;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Campeonato",
            detail: "Error al cargar la campeonato"
          });
        },
        complete: () => console.info('completo campeonato')
      });

  }
  
  showModal(){
    this.selectedCampeonato=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  saveCampeonatoToList(newData:Campeonato){
    if (this.selectedCampeonato){
      const campeonatoIndex = this.campeonatoes.findIndex(data => data.idcampeonato=== newData.idcampeonato);
     
      this.campeonatoes[campeonatoIndex]=newData;
    }else{
      this.campeonatoes.unshift(newData);
    }
    
  }

  editCampeonato(editData:any){
    this.selectedCampeonato=editData;
    this.displayAddEditModal=true;
  }

  deleteCampeonato(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.nombre + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.campeonatoService.eliminarCampeonato(deleteData.idcampeonato).subscribe(
          {
            next: (data) => {

              this.campeonatoes = this.campeonatoes.filter(val => val.idcampeonato !== deleteData.idcampeonato);
              
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Campeonato Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el campeonato', life: 3000 });

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

