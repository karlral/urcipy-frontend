import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inscriptos } from 'src/app/domain/custom/inscriptos';
import { Evento } from 'src/app/domain/evento';
import baserUrl from 'src/app/service/helper';
import { ParticipanteService } from 'src/app/service/participante.service';
import * as FileSaver from 'file-saver';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoginService } from 'src/app/service/login.service';
import { EventoService } from 'src/app/service/evento.service';

@Component({
  selector: 'app-list-participantes',
  templateUrl: './list-participantes.component.html',
  styleUrls: ['./list-participantes.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class ListParticipantesComponent implements OnInit {
  fecha = new Date();

  @ViewChild('dt') table!: Table;

  activo!: number;
  visible: any;
  mediaLocation = `${baserUrl}/media/`;
  selectedInscripto: Inscriptos = {
    id: 0,
    fecha: this.fecha,
    ci: '',
    corredor: '',
    sexo: 0,
    fecnac: this.fecha,
    telefono: '',
    ciudad: '',
    pais: '',
    club: '',
    categoria: '',
    codigo: '',
    km: 0,
    acobrar: 0,
    pagado: 0,
    dorsal: 0,
    nrogiro: '',
    chip: '',
    sex: '',
    tamano: 0,
    tamanoc: '',
    pag: '',
    kit: 0,
    kittipo: ''
  };
  displayAddEditModal = false;

  displayPagosModal = false;

  inscriptos!: Inscriptos[];
  evento!: Evento;

  tamanos = [
    { label: 'Sin Remera', value: 0 },
    { label: 'Tamaño P', value: 1 },
    { label: 'Tamaño M', value: 2 },
    { label: 'Tamaño G', value: 3 },
    { label: 'Tamaño XG', value: 4 },
    { label: 'Tamaño XXG', value: 5 }

  ];
 
   istimepagos: boolean = false;
idevento!: number;
  constructor(
    private activatedRoute: ActivatedRoute,

    private participanteService: ParticipanteService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private loginService: LoginService,
    private eventoService: EventoService
  ) {}

  ngOnInit(): void {
    this.activo = this.activatedRoute.snapshot.params['activo'];

    

    this.participanteService
      .listarParticipantesActivosComple(this.activo)
      .subscribe({
        next: (p: Inscriptos[]) => {
          this.inscriptos = p;

          this.recorrer();
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => console.info('completo inscriptos'),
      });

      this.eventoService.obtenerEventoPub(this.activo).subscribe(
        {
          next: (e: Evento) => {
            this.evento = e;
            this.idevento=this.evento.idevento;
          },
          error: (error) => {
            console.log(error);
  
          },
          complete: () => console.info('completo evento')
        });

      if (this.loginService.getUserRole() == "TIMEPAGOS") {
          this.istimepagos = true;
      }
  }

  recorrer() {

    for (let i in this.inscriptos) {
            if (this.inscriptos[i].sexo == 1) {
              this.inscriptos[i].sex = 'M';
            } else {
              this.inscriptos[i].sex = 'F';
            }

             if (this.inscriptos[i].kit == 1) {
              this.inscriptos[i].kittipo = 'SI';
            } else {
              this.inscriptos[i].kittipo = 'NO';
            }

            if (this.inscriptos[i].pagado == 2) {
              this.inscriptos[i].pag = 'SI RETIRADO';
            } else {
                if (this.inscriptos[i].pagado == 1) {
                  this.inscriptos[i].pag = 'SI';
                } else {
                  this.inscriptos[i].pag = 'NO';
                }
              
            }

            if (this.inscriptos[i].tamano != null) {
              
              this.inscriptos[i].tamanoc = this.tamanos[this.inscriptos[i].tamano].label;
            } else {
              
            }
          }
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

  deletePartici(deleteData: any) {
    //console.log(deleteData);
    this.confirmationService.confirm({
      message:
        'Estas seguro de que quieres borrar ' + deleteData.corredor + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.participanteService.eliminarParticipante(deleteData.id).subscribe({
          next: (data) => {
            this.inscriptos = this.inscriptos.filter(
              (val) => val.id !== deleteData.id
            );

            this.messageService.add({
              severity: 'success',
              summary: 'Exitosamente',
              detail: 'Participante Borrado',
              life: 3000,
            });
          },
          error: (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Error al eliminar el participante',
              life: 3000,
            });
          },
          complete: () => {
            console.log('Completado');
          },
        });
      },
    });
  }

  editPartici(editData: Inscriptos) {
    //console.log(editData);
    this.selectedInscripto = editData;
    this.displayAddEditModal = true;
  }

  addPagos(editData: Inscriptos) {
    this.selectedInscripto = editData;
    this.displayPagosModal = true;
  }

  showModal() {
    this.displayAddEditModal = true;
  }
  showPagosModal() {
    this.displayPagosModal = true;
  }

  hideModal(isClosed: boolean) {
    this.displayAddEditModal = !isClosed;
  }

  hidePagosModal(isClosed:boolean) {
    this.displayPagosModal=!isClosed;
  }

  addAll() {
    this.confirmationService.confirm({
      message: 'Quieres asignar numero de dorsales a todos los participantes?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.participanteService
          .listarAsigDorsalesParticipantesActivosComple(this.activo)
          .subscribe({
            next: (p: Inscriptos[]) => {
              this.inscriptos = p;
              this.recorrer();
            },
            error: (error) => {
              console.log(error);
            },
            complete: () =>
              console.info('completo asignacion de dorsales inscriptos'),
          });
      },
    });
  }
}
