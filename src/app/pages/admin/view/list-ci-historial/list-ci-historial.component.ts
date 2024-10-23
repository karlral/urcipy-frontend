import { Component, OnInit, ViewChild } from '@angular/core';
import * as FileSaver from 'file-saver';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Historial } from 'src/app/domain/historial';
import { HistorialService } from 'src/app/service/historial.service';


@Component({
  selector: 'app-list-ci-historial',
  templateUrl: './list-ci-historial.component.html',
  styleUrls: ['./list-ci-historial.component.css'],
  providers: [MessageService]
})
export class ListCiHistorialComponent  implements OnInit{

  @ViewChild('dt') table!: Table;
  
  corredores: Historial[] = [];

  displaySearch=true;
  buscado:string="";
  nomparticipante:string="";

  constructor( private historialService: HistorialService,
    private messageService: MessageService
    ) { }
 
    ngOnInit(): void {
    }

  corredorSearch(buscado:string){
    console.log('Buscamos la cantidad de registros con '+buscado);
    this.displaySearch=false;
    this.historialService.pubListarHistorial(buscado).subscribe(
      {
        next: (datos: Historial[]) => {
          this.corredores = datos;
          this.nomparticipante=this.corredores[0].nomparticipante;
         
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
                : this.corredores
        );
        const workbook = {
            Sheets: { data: worksheet },
            SheetNames: ['data'],
        };
        const excelBuffer: any = xlsx.write(workbook, {
            bookType: 'xlsx',
            type: 'array',
        });
        this.saveAsExcelFile(excelBuffer, 'historial');
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

