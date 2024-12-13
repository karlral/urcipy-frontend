import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

import { Corredor } from 'src/app/domain/corredor';
import { CorredorService } from 'src/app/service/corredor.service';
import * as FileSaver from 'file-saver';
import { Table } from 'primeng/table';
import { Corredorbus } from 'src/app/domain/custom/corredorbus';

@Component({
  selector: 'app-list-ci-corredor',
  templateUrl: './list-ci-corredor.component.html',
  styleUrls: ['./list-ci-corredor.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class ListCiCorredorComponent {
  @ViewChild('dt') table!: Table;

  corredores: Corredor[] = [];
   
  displayAddEditModal=false;
 
  corredoresbus:Corredorbus[]=[];
  
  displaySearch=true;
  buscado:string="";

  constructor( private messageService: MessageService,
    private corredorService: CorredorService
    
    ) { }
 

  corredorSearch(buscado:string){
    console.log('Buscamos la cantidad de registros con '+buscado);
    this.displaySearch=false;
    this.corredorService.listarCorredoresbus(buscado).subscribe(
      {
        next: (datos: Corredorbus[]) => {
          this.corredoresbus = datos;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Corredor",
            detail: "Error al cargar la corredor"
          });
        },
        complete: () => console.info('completo corredor')
      });

  }

  showSearch(){
    this.buscado="";
    this.displaySearch=true;
  }

 

  exportExcel2() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(
            this.table.filteredValue
                ? this.table.filteredValue
                : this.corredoresbus
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

}

