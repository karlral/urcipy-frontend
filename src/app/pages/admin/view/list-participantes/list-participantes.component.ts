import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inscriptos } from 'src/app/domain/custom/inscriptos';
import { Evento } from 'src/app/domain/evento';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import { ParticipanteService } from 'src/app/service/participante.service';
import * as FileSaver from 'file-saver';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-participantes',
  templateUrl: './list-participantes.component.html',
  styleUrls: ['./list-participantes.component.css'],
    providers: [MessageService,ConfirmationService]
})
export class ListParticipantesComponent implements OnInit{

  @ViewChild('dt') table!: Table;
  
  activo!:number ;
  visible:any;
  mediaLocation = `${baserUrl}/media/`;

  inscriptos!: Inscriptos[];
  evento!:Evento;

  constructor( private activatedRoute:ActivatedRoute,
    private eventoService: EventoService,
    private participanteService:ParticipanteService,
    private messageService: MessageService,
        private confirmationService:ConfirmationService
    ) { }
  
  ngOnInit(): void {
    this.activo=this.activatedRoute.snapshot.params["activo"];

    this.participanteService.listarParticipantesActivosComple(this.activo).subscribe(
      {
        next: (p: Inscriptos[]) => {
          this.inscriptos = p;
        
          
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo inscriptos')
      });

      

    this.eventoService.obtenerEventoActivoPub(this.activo).subscribe(
      {
        next: (e: Evento) => {
          this.evento = e;
          
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo evento')
      });


  }

  exportExcel2() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(
            this.table.filteredValue
                ? this.table.filteredValue
                : this.inscriptos
        );
        const workbook = {
            Sheets: { data: worksheet },
            SheetNames: ['data'],
        };
        const excelBuffer: any = xlsx.write(workbook, {
            bookType: 'xlsx',
            type: 'array',
        });
        this.saveAsExcelFile(excelBuffer, 'participantes');
    });
  }
  
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
        data,
        fileName + '_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  deletePartici(deleteData:any){
    console.log(deleteData);
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.corredor + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.participanteService.eliminarParticipante(deleteData.id).subscribe(
          {
            next: (data) => {

              this.inscriptos = this.inscriptos.filter(val => val.id !== deleteData.id);
              
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Participante Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el participante', life: 3000 });

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