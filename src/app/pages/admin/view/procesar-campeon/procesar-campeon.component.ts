import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { CampeonesService } from 'src/app/service/campeones.service';


@Component({
  selector: 'app-procesar-campeon',
  templateUrl: './procesar-campeon.component.html',
  styleUrls: ['./procesar-campeon.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ProcesarCampeonComponent{

  submitted = false;
  eventoDialog = true;

  constructor(private messageService: MessageService,
    private campeonesService:CampeonesService,
    private confirmationService: ConfirmationService) { }

  procesarCampeones(){

      this.confirmationService.confirm({
        message: 'Estas seguro de que quieres procesar los campeones?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
        this.campeonesService.procesarCampeones().subscribe(

          {
            next: (dato) => {

              this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Se proceso exitosamente', life: 3000 });
            }, error: (error) => {
              console.log(error);
              this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al procesar ', life: 3000 });

            },
            complete: () => {
              console.log('Completo el proceso');
            }
          });
        }
      });
   }
}
