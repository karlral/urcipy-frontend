import { Component, OnInit, ViewChild } from '@angular/core';
import { Campeones } from 'src/app/domain/campeones';

import { CampeonesService } from 'src/app/service/campeones.service';
import baserUrl from 'src/app/service/helper';
import * as FileSaver from 'file-saver';
import { Table } from 'primeng/table';

import { Campeonesfiltro } from 'src/app/domain/custom/campeonesfiltro';

@Component({
  selector: 'app-list-campeones',
  templateUrl: './list-campeones.component.html',
  styleUrls: ['./list-campeones.component.css']
})
export class ListCampeonesComponent implements OnInit {

  @ViewChild('dt') table!: Table;
  
  campeoness!:Campeones[];

  campeonesfiltros:Campeonesfiltro[]=[];
  campeonesfiltro:Campeonesfiltro={
    idcampeones: 0,
      puesto: 0,
      nombre: '',
      categoria: '',
      club: '',
      velmedia: '',
      promedio: undefined,
      kmts: 0,
      cantidad: 0,
      puntos: 0,
      ruta: ''
  };

  mediaLocation = `${baserUrl}/media/2025/`;

  anho!:number;
  campeonesDialog: boolean = false;
  rutaSeleccionada: string = '';
  campeonSeleccionado: Campeones = {} as Campeones;

  constructor(
    private campeonesService: CampeonesService
  ) { }

 ngOnInit(): void {
 
 
  this.campeonesService.listarCampeones().subscribe(
     {
       next: (dato: Campeones[]) => {
         this.campeoness = dato;
        // console.log(this.campeoness);
            
            for (var i = 0; i <= dato.length-1; i++) {
                this.campeonesfiltro.idcampeones=dato[i].idcampeones;
                this.campeonesfiltro.puesto=dato[i].puesto;
                this.campeonesfiltro.nombre=dato[i].nombre;
                this.campeonesfiltro.categoria=dato[i].categoriah.nomcorto;
                this.campeonesfiltro.club=dato[i].club.nomclub;
                this.campeonesfiltro.velmedia=dato[i].velmedia;
                this.campeonesfiltro.promedio=dato[i].promedio;
                this.campeonesfiltro.kmts=dato[i].kmts;
                this.campeonesfiltro.cantidad=dato[i].cantidad;
                this.campeonesfiltro.puntos=dato[i].puntos;
                this.campeonesfiltro.ruta=dato[i].ruta;

                this.campeonesfiltros.push(this.campeonesfiltro);
                this.campeonesfiltro={
                   idcampeones: 0, 
                  puesto: 0,
                  nombre: '',
                    categoria: '',
                    club: '',
                    velmedia: '',
                    promedio: undefined,
                    kmts: 0,
                    cantidad: 0,
                    puntos: 0,
                    ruta: ''

                }
              }
              
       },
       error: (error) => {
         console.log(error);
         
       },
       complete: () => console.info('completo carga de categorias')
     });
   
 }


showModal(campeon:Campeones){
    this.rutaSeleccionada = campeon.ruta;
    this.campeonSeleccionado = campeon;
    this.campeonesDialog = true;
}

hideModal(isClosed:boolean){
    this.campeonesDialog=!isClosed;
  }

saveImgToList(ruta:string){
  this.rutaSeleccionada = ruta;
  
  

}

 exportExcel2() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(
          this.table.filteredValue
              ? this.table.filteredValue
              : this.campeonesfiltros
      );
      const workbook = {
          Sheets: { data: worksheet },
          SheetNames: ['data'],
      };
      const excelBuffer: any = xlsx.write(workbook, {
          bookType: 'xlsx',
          type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'campeones');
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