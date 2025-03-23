import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import system from './helpersys';

@Injectable({
  providedIn: 'root'
})
export class TimeGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.isLoggedIn() && this.loginService.getUserRole() == 'TIMIO'  && this.loginService.getUserIdregional() == system){
      return true;
    }else{
      this.router.navigate(['sistema']);
      return false;
    }
      
  }
  
}
