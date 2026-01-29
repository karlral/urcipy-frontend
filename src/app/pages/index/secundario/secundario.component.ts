import { Component, OnInit } from '@angular/core';
import baserUrl from 'src/app/service/helper';
import system from 'src/app/service/helpersys';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent  implements OnInit{
  acceso = system;
  mediaLocation = `${baserUrl}/media/`;
  regional: any = {};

  constructor(
    private systemService: SystemService  ) {}
  ngOnInit(): void {
    
    this.regional = this.systemService.getSystem();
    

  }
}
