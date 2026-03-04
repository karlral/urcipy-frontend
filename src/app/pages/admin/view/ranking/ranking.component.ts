import { Component, OnInit, ViewChild } from '@angular/core';
import * as FileSaver from 'file-saver';
import { Table } from 'primeng/table';
import {  MessageService } from 'primeng/api';
import { Corredorank } from 'src/app/domain/custom/corredorank';

import { MovimientoService } from 'src/app/service/movimiento.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
  providers: [MessageService]
})
export class RankingComponent  implements OnInit {

  @ViewChild('dt') table!: Table;
  
  corredorankes: Corredorank[] = [];
  corredorank: Corredorank={
    idmovimiento: 0,
    fecha: new Date,
    nomconcepto: '',
    idcorredor: 0,
    corredor: '',
    club: '',
    categoria: '',
    entrada: 0,
    salida: 0,
    foto: '',
    puntua: 0,
    cantidad: 0
  }; 
  
  corredorankes2: Pick<Corredorank,  'nomconcepto' |  'corredor' | 'club' | 'categoria' | 'entrada' >[] = [];

  displayAddModal=false;
  entradas:number=0;
  salidas:number=0;

   

  constructor( private messageService: MessageService,
    private movimientoService: MovimientoService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.movimientoService.listarMovimientosRankingPub().subscribe(
      {
        next: (datos: Corredorank[]) => {
          this.corredorankes = datos;
         // console.log(datos);
          this.calcularTotales()
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Movimiento",
            detail: "Error al cargar la movimiento"
          });
        },
        complete: () => console.info('completo movimiento')
      });

  }
  

  calcularTotales() {
    let totalentrada = 0,totalsalida =0;
    for (let movi of this.corredorankes) {
        totalentrada += movi.entrada;
        totalsalida += movi.salida;
    }

    this.entradas = totalentrada;
    this.salidas =totalsalida;
}




exportExcel2() {
  
  if (this.table.filteredValue) {
    this.corredorankes2 = this.table.filteredValue
      .map(({  nomconcepto, corredor, club, categoria, entrada })  => ({  nomconcepto, corredor, club, categoria, entrada }))
      .sort((a, b) => a.club.localeCompare(b.club)); 
  }else {
    this.corredorankes2 = this.corredorankes
      .map(({  nomconcepto, corredor, club, categoria, entrada })  => ({  nomconcepto, corredor, club, categoria, entrada }))
      .sort((a, b) => a.club.localeCompare(b.club)); 
  }



    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(
        this.corredorankes2
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

