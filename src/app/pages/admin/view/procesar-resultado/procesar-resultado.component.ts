import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ResultimioService } from 'src/app/service/resultimio.service';
@Component({
  selector: 'app-procesar-resultado',
  templateUrl: './procesar-resultado.component.html',
  styleUrls: ['./procesar-resultado.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ProcesarResultadoComponent {submitted = false;
  eventoDialog = true;

  // para agregar
  
  
  currentFile?: File;
  fileName = '';
  preview= '';
  resultimios: any;

  displayTable: boolean = false;

  constructor(private messageService: MessageService,
    private resultimioService:ResultimioService,
    private confirmationService: ConfirmationService) { }

  procesarResultados(){

      this.confirmationService.confirm({
        message: 'Estas seguro de que quieres procesar los resultados?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
        this.resultimioService.agregarResultado(this.resultimios).subscribe(

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

    inscribirTodos(){

      this.confirmationService.confirm({
        message: 'Estas seguro de que quieres inscribir a todos los participantes?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
        this.resultimioService.inscribirTodos(this.resultimios).subscribe(

          {
            next: (dato) => {

              this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Se inscribieron todos los participantes', life: 3000 });
            }, error: (error) => {
              console.log(error.error);
              this.messageService.add({ severity: 'success', summary: 'Error', detail: error.error || 'Error al inscribir participantes', life: 6000 });

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
        this.resultimios=result.map((item: any) => {

          return {
            idevento: parseInt(item[0]),
            nomparticipante: item[1],
            poscategoria: parseInt(item[2]),
            tiempos: item[3],
            dorsal: parseInt(item[4]),
            ci: item[5],
            distancia: parseInt(item[6]),
            categoria: item[7],
            club: item[8],
            promedio: parseFloat(item[9])
          };
        });
        //console.log('Array de objetos:', this.resultimios);
        this.displayTable = true;
      };

      reader.readAsText(file);
     

      

      //**** */
    } else {
      this.fileName = '';
    }
  }

}
