import { Component, OnInit, ViewChild } from '@angular/core';
import { Campeones } from 'src/app/domain/campeones';
import { Categoriah } from 'src/app/domain/categoriah';
import { CampeonesService } from 'src/app/service/campeones.service';
import baserUrl from 'src/app/service/helper';
import * as FileSaver from 'file-saver';
import { Table } from 'primeng/table';
import { Club } from 'src/app/domain/club';
import { Regional } from 'src/app/domain/regional';
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
      puesto: 0,
      nombre: '',
      categoria: '',
      club: '',
      velmedia: '',
      promedio: undefined,
      kmts: 0,
      cantidad: 0,
      puntos: 0
  };

  mediaLocation = `${baserUrl}/media/`;

  anho!:number;
  /*regional:Regional={
    idregional: 0,
    nomregional: '',
    nomcorto: '',
    logo: ''
  }

  club:Club={
    idclub: 0,
    nomclub: '',
    presidente: '',
    telepresi: '',
    vicepresidente: '',
    telvice: '',
    telefono: '',
    email: '',
    ruta: '',
    rutagrande: '',
    regional: this.regional
  }

  categoriah:Categoriah={
    idcategoriah: 0,
    nomcategoria: '',
    nomcorto: '',
    ano: 0
  }

  campeon:Campeones={
    idcampeones: 0,
    nombre: '',
    apellido: '',
    nacionalidad: '',
    ano: 0,
    peso: 0,
    altura: 0,
    bici: '',
    velmedia: '',
    puntos: 0,
    puesto: 0,
    rutabici: '',
    ruta: '',
    promedio: undefined,
    kmts: 0,
    cantidad: 0,
    categoriah: this.categoriah,
    club:this.club
  }*/

  constructor(
    private campeonesService: CampeonesService
  ) { }

 ngOnInit(): void {
 
 
  this.campeonesService.listarCampeones().subscribe(
     {
       next: (dato: Campeones[]) => {
         this.campeoness = dato;
            
            for (var i = 0; i <= dato.length; i++) {
                this.campeonesfiltro.puesto=dato[i].puesto;
                this.campeonesfiltro.nombre=dato[i].nombre;
                this.campeonesfiltro.categoria=dato[i].categoriah.nomcorto;
                this.campeonesfiltro.club=dato[i].club.nomclub;
                this.campeonesfiltro.velmedia=dato[i].velmedia;
                this.campeonesfiltro.promedio=dato[i].promedio;
                this.campeonesfiltro.kmts=dato[i].kmts;
                this.campeonesfiltro.cantidad=dato[i].cantidad;
                this.campeonesfiltro.puntos=dato[i].puntos;

                this.campeonesfiltros.push(this.campeonesfiltro);
                this.campeonesfiltro={puesto: 0,
                    nombre: '',
                    categoria: '',
                    club: '',
                    velmedia: '',
                    promedio: undefined,
                    kmts: 0,
                    cantidad: 0,
                    puntos: 0

                }
              }
              
       },
       error: (error) => {
         console.log(error);
         
       },
       complete: () => console.info('completo carga de categorias')
     });
   
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