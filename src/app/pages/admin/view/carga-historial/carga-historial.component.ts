import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Evento } from 'src/app/domain/evento';
import { EventoService } from 'src/app/service/evento.service';
import { HistorialService } from 'src/app/service/historial.service';

@Component({
  selector: 'app-carga-historial',
  templateUrl: './carga-historial.component.html',
  styleUrls: ['./carga-historial.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class CargaHistorialComponent implements OnInit{
  eventos: Evento[] = [];
  selectedIdevento = null;

  submitted = false;
  eventoDialog = true;

  constructor(private messageService: MessageService, private eventoService: EventoService,
    private historialService:HistorialService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.eventoService.listarEventosModoPub(0).subscribe(
      {
        next: (dato: Evento[]) => {
          this.eventos = dato;
        
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Eventos",
            detail: "Error al cargar la eventos"
          });
        },
        complete: () => console.info('completo evento')
      });

  }

  cargahistorial(){



    if (this.selectedIdevento) {

      this.confirmationService.confirm({
        message: 'Estas seguro de que quieres procesar el evento ' + this.selectedIdevento + '?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            
        this.historialService.cargarHistorial(this.selectedIdevento).subscribe(
          {
            next: (dato) => {

              this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El historial ha sido cargado con exito', life: 3000 });
            }, error: (error) => {
              console.log(error);
              this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al procesar el historial', life: 3000 });

            },
            complete: () => {
              console.log('Completo al actualizar');
            }
          });

        }
      });

    }else{
      this.messageService.add({ severity: 'success', summary: 'Error', detail: 'No se selecciono el Evento', life: 3000 });
    }
  }

}
