import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preinscripcionesNombre'
})
export class PreinscripcionesNombrePipe implements PipeTransform {

  transform(value: number): string {
    const preinscripciones = [
      { label: 'NO',   value: 0 },
      { label: 'SI',  value: 1 },
      { label: 'LISTADO',  value: 2 },
      { label: 'Link Externo',  value: 3 },
      { label: 'SI - SIN LISTADO',  value: 4 }
    ];
    const preinscripcion = preinscripciones.find(p => p.value === value);
    return preinscripcion ? preinscripcion.label : 'N/A';
  }

}
