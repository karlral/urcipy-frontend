import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inscripto } from 'src/app/domain/custom/inscripto';
import { Evento } from 'src/app/domain/evento';

import { ParticipanteService } from 'src/app/service/participante.service';
import * as FileSaver from 'file-saver';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoginService } from 'src/app/service/login.service';
import { EventoRemeraService } from 'src/app/service/evento-remera.service';
import { EventoService } from 'src/app/service/evento.service';
import { EventoAsignacion } from 'src/app/domain/eventoAsignacion';
import { Participuntaje } from 'src/app/domain/custom/participuntaje';

@Component({
  selector: 'app-asignacorre',
  templateUrl: './asignacorre.component.html',
  styleUrls: ['./asignacorre.component.css'],
    providers: [MessageService,ConfirmationService]
})
export class AsignacorreComponent  implements OnInit {
  fecha = new Date();

  @ViewChild('dt') table!: Table;

  activo!: number;
  visible: any;
  
  selectedInscripto: Participuntaje = {
    idparticipante: 0,
    idevento: 0,
    idcorredor: 0,
    ci: '',
    corredor: '',
    club: '',
    categoria: '',
    puestocat: 0,
    puntaje: 0,
    puntajeclub: 0,
    puntajeaux: 0,
    puntua: 0
  };
selectedCorredor:any=null;

  displayAddModal = false;


  inscriptos!: Participuntaje[];
  evento!: Evento;
  idevento: number = 0;

  
  constructor(
    private activatedRoute: ActivatedRoute,

    private participanteService: ParticipanteService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private loginService: LoginService,
    private eventoRemeraService: EventoRemeraService,
    private eventoService: EventoService
  ) { }

  ngOnInit(): void {
    this.activo = this.activatedRoute.snapshot.params['activo'];

    this.participanteService
      .listarParticipantesActivosPuntaje(this.activo)
      .subscribe({
        next: (p: Participuntaje[]) => {
          this.inscriptos = p;

        },
        error: (error) => {
          console.log(error);
        },
        complete: () => console.info('completo inscriptos'),
      });

    this.eventoService.obtenerEventoActivoPub(this.activo).subscribe(
      {
        next: (data) => {
          this.evento = data;
          this.idevento = this.evento.idevento!;
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('completo evento actual');

          
            
        },
      }
    );

   
  }


  exportExcel2() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(
        this.table.filteredValue ? this.table.filteredValue : this.inscriptos
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



  addAsigna(editData: Participuntaje) {
    this.selectedInscripto = editData;
    this.displayAddModal = true;
  }

  showModal() {
    this.displayAddModal = true;
  }

  hideModal(isClosed: boolean) {
    this.displayAddModal = !isClosed;
  }
  
   updateCorredorToList(newData:EventoAsignacion){
    
   // this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'EventoAsignacion Agregado', life: 3000 });
    this.displayAddModal=false; 
      
  }
}
