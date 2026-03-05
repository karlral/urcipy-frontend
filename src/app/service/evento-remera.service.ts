import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoRemera } from '../domain/eventoRemera';
import baserUrl from './helper';
import { Remera } from '../domain/remera';

@Injectable({
  providedIn: 'root'
})
export class EventoRemeraService {

  constructor(private http:HttpClient) {   }
  
  public listarEventoRemeraes():Observable<EventoRemera[]>{
    return this.http.get<EventoRemera[]>(`${baserUrl}/eventoremera/`);
  }
  public obtenerEventoRemera(ideventoRemera:any):Observable<EventoRemera>{
    return this.http.get<EventoRemera>(`${baserUrl}/eventoremera/${ideventoRemera}`);
  }

  public agregarEventoRemera(eventoRemera:any){
    return this.http.post(`${baserUrl}/eventoremera/`,eventoRemera);
  }
  public eliminarEventoRemera(ideventoRemera:any){
    return this.http.delete(`${baserUrl}/eventoremera/${ideventoRemera}`);
  }
  public actualizarEventoRemera(eventoRemera:any){
    return this.http.put(`${baserUrl}/eventoremera/`,eventoRemera);
  }

  public listarRemerasEvento(idevento:any):Observable<Remera[]>{
    return this.http.get<Remera[]>(`${baserUrl}/eventoremerapub/${idevento}`);
  }

}