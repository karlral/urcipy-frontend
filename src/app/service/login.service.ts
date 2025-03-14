import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubjec = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  //generamos el token
  public generateToken(loginData:any){
    return this.http.post(`${baserUrl}/generate-token`, loginData);
  }

  //iniciamos sesion y establecemos el token en el localStorage
  public loginUser(token:any){
    localStorage.setItem('token',token);
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if (tokenStr== undefined || tokenStr== '' || tokenStr==null){
      return false;
    }else{
      return true;
    }
  }

  /**Probamos */
  public isUserIn(){
    let userStr = localStorage.getItem('user');
    if (userStr== undefined || userStr== '' || userStr==null){
      return false;
    }else{
      return true;
    }
  }
  /** */
  
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let userStr=localStorage.getItem('user');
    if (userStr!= null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;

    }
  }

  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getUserIdregional(){
    let user = this.getUser();
    return user.regional.idregional;
  }

  public getCurrentUser(){
    return this.http.get(`${baserUrl}/actual-usuario`);

  }
}
