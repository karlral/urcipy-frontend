import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioRol } from '../domain/usuarioRol';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRolService {

  constructor(private http:HttpClient) {   }
  
  public listarUsuarioRoles():Observable<UsuarioRol[]>{
    return this.http.get<UsuarioRol[]>(`${baserUrl}/usuariorol/`);
  }
  public obtenerUsuarioRol(idusuarioRol:any):Observable<UsuarioRol>{
    return this.http.get<UsuarioRol>(`${baserUrl}/usuariorol/${idusuarioRol}`);
  }

  public agregarUsuarioRol(usuarioRol:any){
    return this.http.post(`${baserUrl}/usuariorol/`,usuarioRol);
  }
  public eliminarUsuarioRol(idusuarioRol:any){
    return this.http.delete(`${baserUrl}/usuariorol/${idusuarioRol}`);
  }
  public actualizarUsuarioRol(usuarioRol:any){
    return this.http.put(`${baserUrl}/usuariorol/`,usuarioRol);
  }

  public listarUsuarioRolesPorEvento(idrol:any):Observable<UsuarioRol[]>{
    return this.http.get<UsuarioRol[]>(`${baserUrl}/usuariorol/${idrol}`);
  }

}