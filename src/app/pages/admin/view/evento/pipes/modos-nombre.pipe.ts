import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modosNombre'
})
export class ModosNombrePipe implements PipeTransform {

  transform(value: number): string {

    
    const modos = [
          { label: 'EN PROCESO',   value: 0 },
          { label: 'HISTORIAL',  value: 1 },
          { label: 'PLANIFICADO',  value: 2 }
        ];
    
    return modos.find(m => m.value === value)?.label || 'N/A';

  }

}
