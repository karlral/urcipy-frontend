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

}
