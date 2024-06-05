import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable, map, shareReplay } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.css']
})
export class UserNavigationComponent {

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
    label: 'Procesos',
    items: [
      {label: 'Lista Inscriptos Evento 1', icon: 'pi pi-search', routerLink: ['/user/access/listpart/1']},
      {label: 'Lista Inscriptos Evento 2', icon: 'pi pi-search', routerLink: ['/user/access/listpart/2']}
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

