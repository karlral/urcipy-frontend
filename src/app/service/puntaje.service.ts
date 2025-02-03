import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Puntaje } from '../domain/puntaje';
import baserUrl from './helper';
import system from './helpersys';


@Injectable({
  providedIn: 'root'
})
export class PuntajeService {

  constructor(private http:HttpClient) {   }
  
  public listarPuntajees():Observable<Puntaje[]>{
    return this.http.get<Puntaje[]>(`${baserUrl}/puntaje/system/${system}`);
  }
  public obtenerPuntaje(idpuntaje:any):Observable<Puntaje>{
    return this.http.get<Puntaje>(`${baserUrl}/puntaje/${idpuntaje}`);
  }

  public agregarPuntaje(puntaje:any){
    return this.http.post(`${baserUrl}/puntaje/`,puntaje);
  }
  public eliminarPuntaje(idpuntaje:any){
    return this.http.delete(`${baserUrl}/puntaje/${idpuntaje}`);
  }
  public actualizarPuntaje(puntaje:any){
    return this.http.put(`${baserUrl}/puntaje/`,puntaje);
  }


}
