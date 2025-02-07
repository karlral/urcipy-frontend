import { Component, Input } from '@angular/core';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent {
  mediaLocation = `${baserUrl}/media/`;
  @Input() corredor:any=null;
  @Input() anho:any=null;
}
