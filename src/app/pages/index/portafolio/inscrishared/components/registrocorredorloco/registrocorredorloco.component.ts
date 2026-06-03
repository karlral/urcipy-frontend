import { Component, Input } from '@angular/core';

import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-registrocorredorloco',
  templateUrl: './registrocorredorloco.component.html',
  styleUrls: ['./registrocorredorloco.component.css']
})
export class RegistrocorredorlocoComponent {
    mediaLocation = `${baserUrl}/media/`;
  
  @Input() inscriptoparticipante:any=null;

}
