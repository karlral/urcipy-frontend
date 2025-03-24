import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable, map, shareReplay } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-time-navigation',
  templateUrl: './time-navigation.component.html',
  styleUrls: ['./time-navigation.component.css']
})
export class TimeNavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );


  user:any=null;
  isLoggedIn:boolean=true;
  gfg:boolean=true;

  items: MenuItem[] = [];
  ancho!: number;
constructor(private breakpointObserver: BreakpointObserver,
  public login:LoginService,private router:Router) {}


ngOnInit(): void {
  
  
  this.user=this.login.getUser();
  this.isLoggedIn=this.login.isLoggedIn();

  this.items = [
    {
      label: 'Principal',
      items: [
        {label: 'Inicio', icon: 'pi pi-home', routerLink: ['/time/access']},
        {label: 'Club', icon: 'pi pi-prime', routerLink: ['/time/access/club']},
        {label: 'Eventos', icon: 'pi pi-building-columns', routerLink: ['/time/access/evento/evento']},
        {label: 'Corredor x ci', icon: 'pi pi-search', routerLink: ['/time/access/correci']},
        {label: 'Cerrar Sesión', icon: 'pi pi-sign-out', command: () => this.logout()},
        
      ]
  }
  ,
{
    label: 'Procesos',
    items: [
      {label: 'Dorsales', icon: 'pi pi-calendar', routerLink: ['/time/access/dorsal']},
      {label: 'Lista Inscriptos Evento 1', icon: 'pi pi-list-check', routerLink: ['/time/access/listpart/1']},
      {label: 'Lista Inscriptos Evento 2', icon: 'pi pi-list-check', routerLink: ['/time/access/listpart/2']},
    ]
}

];
}

public cerrar(){
  this.gfg=false;
      this.ancho=0;
  
}

public abrir(){
  
  
    this.gfg=true;
  this.ancho=29;
  //.style.width = "400px";
}
public logout(){
  this.login.logout();
  window.location.reload();
}

}

