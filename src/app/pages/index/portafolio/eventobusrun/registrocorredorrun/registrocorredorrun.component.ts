import { Component, Input } from '@angular/core';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-registrocorredorrun',
  templateUrl: './registrocorredorrun.component.html',
  styleUrls: ['./registrocorredorrun.component.css']
})
export class RegistrocorredorrunComponent {
  mediaLocation = `${baserUrl}/media/`;
  
  @Input() participante:any=null;

  tamanos = [
    { label: 'Sin Remera', value: 0 },
    { label: 'Tamaño P', value: 1 },
    { label: 'Tamaño M', value: 2 },
    { label: 'Tamaño G', value: 3 },
    { label: 'Tamaño XG', value: 4 },
    { label: 'Tamaño XXG', value: 5 }

  ];
}
