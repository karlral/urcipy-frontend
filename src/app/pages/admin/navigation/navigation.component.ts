import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

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

  this.items = [{
    label: 'Principal',
    items: [
      {label: 'Pais', icon: 'pi pi-download', routerLink: ['/admin/acceso/pais']},
      {label: 'Ciudad', icon: 'pi pi-refresh', routerLink: ['/admin/acceso/ciudad']},
      {label: 'Regional', icon: 'pi pi-repeat', routerLink: ['/admin/acceso/regional']},
      {label: 'Club', icon: 'pi pi-repeat', routerLink: ['/admin/acceso/club']},
      {label: 'Categoria', icon: 'pi pi-repeat', routerLink: ['/admin/acceso/categoria']},
      {label: 'Corredor', icon: 'pi pi-repeat', routerLink: ['/admin/acceso/corredor/corre']},
      {label: 'Evento', icon: 'pi pi-repeat', routerLink: ['/admin/acceso/evento/evento']},
      {label: 'Buscar', icon: 'pi pi-search', routerLink: ['/admin/acceso/buscorredor']}
    ]
},
{
    label: 'Procesos',
    items: [
      {label: 'Lista Inscriptos Evento', icon: 'pi pi-search', routerLink: ['/admin/acceso/listpart/1']},
        {label: 'Undo', icon: 'pi pi-refresh'},
        {label: 'Redo', icon: 'pi pi-repeat'}
    ]
},

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

