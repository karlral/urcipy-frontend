import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Campeones } from 'src/app/domain/campeones';
import { CampeonesService } from 'src/app/service/campeones.service';

import baserUrl from 'src/app/service/helper';
import { MediaService } from 'src/app/service/media.service';

@Component({
  selector: 'app-add-foto',
  templateUrl: './add-foto.component.html',
  styleUrls: ['./add-foto.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class AddFotoComponent {

 mediaLocation = `${baserUrl}/media/2025/`;
  
  @Input() campeonesDialog: boolean = false;
 @Input() campeon:Campeones = {} as Campeones;
  @Input() ruta: string = '';

@Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
@Output() clickSaveImg: EventEmitter<any> = new EventEmitter<any>();
// para agregar
url?: String;
currentFile?: File;
fileName = '';
preview = '';



  

  constructor(private messageService: MessageService, 
    private campeonesService: CampeonesService,
    private confirmationService: ConfirmationService,
    private mediaService: MediaService) { }

  ngOnInit(): void {

    
    

     
  }

  //para agregar nuevo
 

  

  hideDialog() {
    this.clickClose.emit(true);
  }

  savecampeones() {
    

    if(this.currentFile){
      const formData= new FormData();
      formData.append('file',this.currentFile);

      this.mediaService.uploadFileFolder(formData,'2025').subscribe(
        { next: response =>{
         
          this.url=response.url;

          this.ruta=this.fileName;
          this.clickSaveImg.emit(this.ruta);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La imagen a sido actualizada con exito', life: 3000 });
            this.hideDialog();
        },
        error: errores => {
          this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al cargar el archivo', life: 3000 });
          return ;
        }
      }
        
      );
      
      this.ruta=this.fileName;
      this.campeon.ruta=this.ruta;

      this.campeonesService.actualizarCampeones(this.campeon).subscribe(
        {
          next: data => {
            console.log("data actualizado");
          },
          error: error => {
            console.log(error);
            
          }
        }
      );
   
    }

   

  }



  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
     
      this.fileName = this.currentFile.name;
      /*** para mostrar antes de enviar y guardar */
      
        this.preview = '';
  
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
         
          this.preview = e.target.result;
        };
  
        reader.readAsDataURL(this.currentFile);
      
      //**** */
    } else {
      this.fileName = '';
    }
  }

  



}