import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipo } from '../domain/tipo';
import baserUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class TipoService {

  constructor(private http:HttpClient) {   }
  
  public listarTipoes():Observable<Tipo[]>{
    return this.http.get<Tipo[]>(`${baserUrl}/tipo/`);
  }
  public obtenerTipo(idtipo:any):Observable<Tipo>{
    return this.http.get<Tipo>(`${baserUrl}/tipo/${idtipo}`);
  }

  public agregarTipo(tipo:any){
    return this.http.post(`${baserUrl}/tipo/`,tipo);
  }
  public eliminarTipo(idtipo:any){
    return this.http.delete(`${baserUrl}/tipo/${idtipo}`);
  }
  public actualizarTipo(tipo:any){
    return this.http.put(`${baserUrl}/tipo/`,tipo);
  }


}