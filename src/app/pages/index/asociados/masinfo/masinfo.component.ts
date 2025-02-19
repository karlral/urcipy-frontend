import { Component } from '@angular/core';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.component.html',
  styleUrls: ['./masinfo.component.css']
})
export class MasinfoComponent {
  mediaLocation = `${baserUrl}/media/`;
  foto="masinfo.jpg";

}
