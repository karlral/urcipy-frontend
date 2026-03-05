import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inscripto } from 'src/app/domain/custom/inscripto';
import { Evento } from 'src/app/domain/evento';
import baserUrl from 'src/app/service/helper';
import { ParticipanteService } from 'src/app/service/participante.service';
import * as FileSaver from 'file-saver';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoginService } from 'src/app/service/login.service';
import { EventoRemeraService } from 'src/app/service/evento-remera.service';
import { EventoService } from 'src/app/service/evento.service';
import { Remera } from 'src/app/domain/remera';

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
  selectedInscripto: Inscripto = {
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
    pag: '',
    kit: 0,
    kittipo: '',
    tamano: 0,
    tamanoc: '',
    tandac: '',
    tanda: 0,
    orden: 0,
    horario: '',
    logoclub: '',
    logoevento: ''
  };
  displayAddEditModal = false;

  displayPagosModal = false;

  inscriptos!: Inscripto[];
  evento!: Evento;
  idevento: number = 0;

  tamanos: Remera[] = [];
  displayRemera: boolean = false;

  istimepagos: boolean = false;

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
      .listarParticipantesActivosComple(this.activo)
      .subscribe({
        next: (p: Inscripto[]) => {
          this.inscriptos = p;
          this.recorrer();

          // for (let i in this.inscriptos) {
          //   if (this.inscriptos[i].sexo == 1) {
          //     this.inscriptos[i].sex = 'M';
          //   } else {
          //     this.inscriptos[i].sex = 'F';
          //   }
          //   this.inscriptos[i].tandac = 'Tanda '+this.inscriptos[i].tanda;
          // }
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

          this.eventoRemeraService.listarRemerasEvento(this.idevento).subscribe(
            {
              next: (dato: any) => {
                this.tamanos = dato;
                this.displayRemera = this.tamanos.length > 0;


                this.tamanos.sort((a, b) => a.idremera - b.idremera);

              },
              error: (error) => {
                console.log(error);
                this.messageService.add({
                  severity: "error",
                  summary: "Evento Remera",
                  detail: "Error al cargar el evento remera"
                });
              }
            });
        },
      }
    );

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

      
      this.inscriptos[i].tandac = 'Tanda ' + this.inscriptos[i].tanda;

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

  editPartici(editData: Inscripto) {
    //console.log(editData);
    this.selectedInscripto = editData;
    this.displayAddEditModal = true;
  }

  addPagos(editData: Inscripto) {
    this.selectedInscripto = editData;
    this.displayPagosModal = true;
  }

  showModal() {
    this.displayAddEditModal = true;
  }

  hideModal(isClosed: boolean) {
    this.displayAddEditModal = !isClosed;
  }
  hidePagosModal(isClosed: boolean) {
    this.displayPagosModal = !isClosed;
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
            next: (p: Inscripto[]) => {
              this.inscriptos = p;
              for (let i in this.inscriptos) {
                if (this.inscriptos[i].sexo == 1) {
                  this.inscriptos[i].sex = 'M';
                } else {
                  this.inscriptos[i].sex = 'F';
                }
                this.inscriptos[i].tandac = 'Tanda ' + this.inscriptos[i].tanda.toString();
              }
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
