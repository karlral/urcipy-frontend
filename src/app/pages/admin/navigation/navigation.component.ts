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
      {label: 'Trayecto', icon: 'pi pi-download', routerLink: ['/admin/acceso/trayecto']},
      {label: 'Categoria', icon: 'pi pi-repeat', routerLink: ['/admin/acceso/categoria']},
      {label: 'Corredor', icon: 'pi pi-repeat', routerLink: ['/admin/acceso/corredor/corre']},
      {label: 'Evento', icon: 'pi pi-repeat', routerLink: ['/admin/acceso/evento/evento']},
      
    ]
},
{
    label: 'Listas',
    items: [
      {label: 'Lista Inscriptos Evento 1', icon: 'pi pi-search', routerLink: ['/admin/acceso/listpart/1']},
      {label: 'Lista Inscriptos Evento 2', icon: 'pi pi-search', routerLink: ['/admin/acceso/listpart/2']},
      
       
    ]
},{
  label: 'Procesos',
  items: [
    {label: 'Cargar Historial', icon: 'pi pi-search', routerLink: ['/admin/acceso/cargahistorial']},
    {label: 'Procesar Campeones', icon: 'pi pi-search', routerLink: ['/admin/acceso/procesarcampeon']},
  ]
},
{
    label: 'Historial',
    items: [
      {label: 'Individual', icon: 'pi pi-search', routerLink: ['/admin/acceso/listcihistorial']},
      {label: 'Anual', icon: 'pi pi-search', routerLink: ['/admin/acceso/listanualhistorial']},
      {label: 'Todos', icon: 'pi pi-search', routerLink: ['/admin/acceso/listhistorial']},
       
    ]
}
,
{
  label: 'Informes',
  items: [
    {label: 'Lista de Corredores', icon: 'pi pi-search', routerLink: ['/admin/acceso/listcicorredores']},
    {label: 'Lista de Campeones', icon: 'pi pi-user', routerLink: ['/admin/acceso/listcampeones']},
     
  ]
}
,
{
  label: 'Usuarios',
  items: [
    {label: 'Crear Usuario Normal', icon: 'pi pi-user', routerLink: ['/admin/acceso/sistema/signup']},
      
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

