import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../domain/evento';
import baserUrl from './helper';
import system from './helpersys';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http:HttpClient) {   }
  
  public listarEventoes():Observable<Evento[]>{
    return this.http.get<Evento[]>(`${baserUrl}/evento/system/${system}`);
  }
  public obtenerEvento(idevento:any):Observable<Evento>{
    return this.http.get<Evento>(`${baserUrl}/evento/${idevento}`);
  }

  public agregarEvento(evento:any){
    return this.http.post(`${baserUrl}/evento/`,evento);
  }
  public eliminarEvento(idevento:any){
    return this.http.delete(`${baserUrl}/evento/${idevento}`);
  }
  public actualizarEvento(evento:any){
    return this.http.put(`${baserUrl}/evento/`,evento);
  }

  //publico
  public listarEventosPub():Observable<Evento[]>{
    return this.http.get<Evento[]>(`${baserUrl}/eventopub/system/${system}`);
  }
  public listarEventosModoPub(modo:any):Observable<Evento[]>{
    return this.http.get<Evento[]>(`${baserUrl}/eventopub/modo/${modo}/${system}`);
  }
  public listarEventosCulminadosPub():Observable<Evento[]>{
    return this.http.get<Evento[]>(`${baserUrl}/eventopub/modo/culminados/${system}`);
  }
  public listarEventosActivosPub():Observable<Evento[]>{
    return this.http.get<Evento[]>(`${baserUrl}/eventopub/activos/${system}`);
  }
  public obtenerEventoActivoPub(activo:any):Observable<Evento>{
    return this.http.get<Evento>(`${baserUrl}/eventopub/activo/${activo}`);
  }
  public obtenerEventoPub(idevento:any):Observable<Evento>{
    return this.http.get<Evento>(`${baserUrl}/eventopub/${idevento}`);
  }
}
