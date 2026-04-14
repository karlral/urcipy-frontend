import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../domain/rol';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RolService {

 
  constructor(private http:HttpClient) {   }
  
  public listarRoles():Observable<Rol[]>{
    return this.http.get<Rol[]>(`${baserUrl}/rol/`);
  }
  public obtenerRol(idrol:any){
    return this.http.get(`${baserUrl}/rol/${idrol}`);
  }

  public agregarRol(rol:any){
    return this.http.post(`${baserUrl}/rol/`,rol);
  }
  public eliminarRol(idrol:any){
    return this.http.delete(`${baserUrl}/rol/${idrol}`);
  }
  public actualizarRol(rol:any){
    return this.http.put(`${baserUrl}/rol/`,rol);
  }
  public publistarRoles():Observable<Rol[]>{
    return this.http.get<Rol[]>(`${baserUrl}/rolpub/`);
  }
}