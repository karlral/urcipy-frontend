import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../domain/usuario';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 
  constructor(private http:HttpClient) {   }
  
  public listarUsuarioes():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${baserUrl}/usuarios/`);
  }
  public obtenerUsuario(idusuario:any){
    return this.http.get(`${baserUrl}/usuarios/${idusuario}`);
  }

  public agregarUsuario(usuario:any){
    return this.http.post(`${baserUrl}/usuarios/`,usuario);
  }
  public eliminarUsuario(idusuario:any){
    return this.http.delete(`${baserUrl}/usuarios/${idusuario}`);
  }
  public actualizarUsuario(usuario:any){
    return this.http.put(`${baserUrl}/usuarios/`,usuario);
  }
  
}