import { Component, OnInit, ViewChild } from '@angular/core';
import * as FileSaver from 'file-saver';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Historial } from 'src/app/domain/historial';
import { HistorialService } from 'src/app/service/historial.service';

@Component({
  selector: 'app-list-historial',
  templateUrl: './list-historial.component.html',
  styleUrls: ['./list-historial.component.css'],
  providers: [MessageService]
})
export class ListHistorialComponent implements OnInit{

  @ViewChild('dt') table!: Table;
  
  corredores: Historial[] = [];

  constructor( private historialService: HistorialService,
    private messageService: MessageService
    ) { }
 
    ngOnInit(): void {
    
    console.log('Buscamos la cantidad de registros con ');
   
    this.historialService.listarHistorial().subscribe(
      {
        next: (datos: Historial[]) => {
          this.corredores = datos;
         
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
        this.saveAsExcelFile(excelBuffer, 'historialtodos');
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

