import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activosNombre'
})
export class ActivosNombrePipe implements PipeTransform {

  transform(value: number): string {
   const activos = [
      { label: 'PROXIMAMENTE',value: -1 },
      { label: 'Culminado',   value: 0 },
      { label: '1er Activo',  value: 1 },
      { label: '2do Activo',  value: 2 },
      { label: '3er Activo',  value: 3 },
      { label: '4er Activo',  value: 4 },
      { label: '5to Activo',  value: 5 },
      { label: '6to Activo',  value: 6 },
      { label: '7mo Activo',  value: 7 },
      { label: '8vo Activo',  value: 8 },
      { label: '9no Activo',  value: 9 },
      { label: '10mo Activo', value: 10 }
    ];
    const activo = activos.find(a => a.value === value);
    return activo ? activo.label : 'N/A';
  }

}
