import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { DorsalService } from 'src/app/service/dorsal.service';

@Component({
  selector: 'app-procesar-dorsal',
  templateUrl: './procesar-dorsal.component.html',
  styleUrls: ['./procesar-dorsal.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ProcesarDorsalComponent {
  submitted = false;
  eventoDialog = true;

  // para agregar
  
  
  currentFile?: File;
  fileName = '';
  preview= '';
  dorsales: any;

  displayTable: boolean = false;

  constructor(private messageService: MessageService,
    private dorsalService:DorsalService,
    private confirmationService: ConfirmationService) { }

  procesarResultados(){

      this.confirmationService.confirm({
        message: 'Estas seguro de que quieres procesar los resultados?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
        this.dorsalService.agregarDorsales(this.dorsales).subscribe(

          {
            next: (dato) => {

              this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Se proceso exitosamente', life: 3000 });
            }, error: (error) => {
              console.log(error.error);
              this.messageService.add({ severity: 'success', summary: 'Error', detail: error.error || 'Error al procesar ', life: 6000 });

            },
            complete: () => {
              console.log('Completo el proceso');
            }
          });
        }
      });
   }

    

   selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];

      this.currentFile = file;

      this.fileName = this.currentFile.name;
     // console.log(this.fileName);
      

      const reader = new FileReader();

      reader.onload = (e: any) => {
  
        const text = e.target.result;
        const lines = text.split('\n').slice(1, -1); // Divide por líneas y omite la primera (cabecera) y la última (vacía)
        const result = lines.map((line: string) => line.split(',')); // Divide cada línea por comas
        //console.log('Array bidimensional:', result);
        this.dorsales=result.map((item: any) => {

          return {
            iddorsal: parseInt(item[0]),
            chip: item[1],
            color: item[2],
            activo: true
          };
        });
        //console.log('Array de objetos:', this.dorsales);
        this.displayTable = true;
      };

      reader.readAsText(file);
     

      

      //**** */
    } else {
      this.fileName = '';
    }
  }

}
