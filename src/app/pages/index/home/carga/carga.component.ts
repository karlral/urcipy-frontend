import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent {
 typed = new Typed('.multiple-text',  {
    strings: ['Cross Country (XC)','Cross Country Maratón (XCM)', 'Cross Country Olímpico (XCO)', 'Cross Country Eliminator (XCE)'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
 });
}
