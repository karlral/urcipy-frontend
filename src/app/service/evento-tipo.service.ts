import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoTipo } from '../domain/eventoTipo';
import baserUrl from './helper';
import { Tipo } from '../domain/tipo';
import { Categoria } from '../domain/categoria';

@Injectable({
  providedIn: 'root'
})
export class EventoTipoService {

  constructor(private http:HttpClient) {   }

  public listarEventoTipoes():Observable<EventoTipo[]>{
    return this.http.get<EventoTipo[]>(`${baserUrl}/eventotipo/`);
  }
  public obtenerEventoTipo(ideventoTipo:any):Observable<EventoTipo>{
    return this.http.get<EventoTipo>(`${baserUrl}/eventotipo/${ideventoTipo}`);
  }

  public agregarEventoTipo(eventoTipo:any){
    return this.http.post(`${baserUrl}/eventotipo/`,eventoTipo);
  }
  public eliminarEventoTipo(ideventoTipo:any){
    return this.http.delete(`${baserUrl}/eventotipo/${ideventoTipo}`);
  }
  public actualizarEventoTipo(eventoTipo:any){
    return this.http.put(`${baserUrl}/eventotipo/`,eventoTipo);
  }

  public listarTiposEvento(idevento:any):Observable<Tipo[]>{
    return this.http.get<Tipo[]>(`${baserUrl}/eventotipopub/${idevento}`);
  }
   public listarCategoriasEvento(idevento:any):Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${baserUrl}/eventotipopub/categorias/${idevento}`);
  }

}
