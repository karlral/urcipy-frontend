import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent {
  @Input() corredor:any=null;
}
