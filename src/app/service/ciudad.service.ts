import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../domain/ciudad';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http:HttpClient) {   }
  
  public listarCiudades():Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(`${baserUrl}/ciudad/`);
  }
  public obtenerCiudad(idciudad:any){
    return this.http.get(`${baserUrl}/ciudad/${idciudad}`);
  }

  public agregarCiudad(ciudad:any){
    return this.http.post(`${baserUrl}/ciudad/`,ciudad);
  }
  public eliminarCiudad(idciudad:any){
    return this.http.delete(`${baserUrl}/ciudad/${idciudad}`);
  }
  public actualizarCiudad(ciudad:any){
    return this.http.put(`${baserUrl}/ciudad/`,ciudad);
  }

  public publistarCiudades():Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(`${baserUrl}/ciudadpub/`);
  }
}