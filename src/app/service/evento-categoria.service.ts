import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoCategoria } from '../domain/eventoCategoria';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EventoCategoriaService {

  constructor(private http:HttpClient) {   }
  
  public listarEventoCategoriaes():Observable<EventoCategoria[]>{
    return this.http.get<EventoCategoria[]>(`${baserUrl}/eventocategoria/`);
  }
  public obtenerEventoCategoria(ideventoCategoria:any):Observable<EventoCategoria>{
    return this.http.get<EventoCategoria>(`${baserUrl}/eventocategoria/${ideventoCategoria}`);
  }

  public agregarEventoCategoria(eventoCategoria:any){
    return this.http.post(`${baserUrl}/eventocategoria/`,eventoCategoria);
  }
  public eliminarEventoCategoria(ideventoCategoria:any){
    return this.http.delete(`${baserUrl}/eventocategoria/${ideventoCategoria}`);
  }
  public actualizarEventoCategoria(eventoCategoria:any){
    return this.http.put(`${baserUrl}/eventocategoria/`,eventoCategoria);
  }


}