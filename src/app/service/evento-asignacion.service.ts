import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoAsignacion } from '../domain/eventoAsignacion';
import baserUrl from './helper';
import { Asignacion } from '../domain/asignacion';

@Injectable({
  providedIn: 'root'
})
export class EventoAsignacionService {

  constructor(private http:HttpClient) {   }
  
  public listarEventoAsignaciones():Observable<EventoAsignacion[]>{
    return this.http.get<EventoAsignacion[]>(`${baserUrl}/eventoasignacion/`);
  }
  public obtenerEventoAsignacion(ideventoAsignacion:any):Observable<EventoAsignacion>{
    return this.http.get<EventoAsignacion>(`${baserUrl}/eventoasignacion/${ideventoAsignacion}`);
  }

  public agregarEventoAsignacion(eventoAsignacion:any){
    return this.http.post(`${baserUrl}/eventoasignacion/`,eventoAsignacion);
  }
  public eliminarEventoAsignacion(ideventoAsignacion:any){
    return this.http.delete(`${baserUrl}/eventoasignacion/${ideventoAsignacion}`);
  }
  public actualizarEventoAsignacion(eventoAsignacion:any){
    return this.http.put(`${baserUrl}/eventoasignacion/`,eventoAsignacion);
  }

  public listarAsignacionsEvento(idevento:any):Observable<Asignacion[]>{
    return this.http.get<Asignacion[]>(`${baserUrl}/eventoasignacionpub/${idevento}`);
  }

}