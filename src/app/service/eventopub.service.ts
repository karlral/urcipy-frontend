import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../domain/evento';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EventopubService {

  constructor(private http:HttpClient) {   }
  
  public listarEventoes():Observable<Evento[]>{
    return this.http.get<Evento[]>(`${baserUrl}/eventopub/`);
  }
  public listarEventosModo(modo:any):Observable<Evento[]>{
    return this.http.get<Evento[]>(`${baserUrl}/eventopub/modo/${modo}`);
  }
  public listarEventosActivos():Observable<Evento[]>{
    return this.http.get<Evento[]>(`${baserUrl}/eventopub/activos`);
  }
  public obtenerEventoActivo(activo:any){
    return this.http.get(`${baserUrl}/eventopub/activo/${activo}`);
  }
  public obtenerEvento(idevento:any):Observable<Evento>{
    return this.http.get<Evento>(`${baserUrl}/eventopub/${idevento}`);
  }

}
