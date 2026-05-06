import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipopuntos } from '../domain/tipopuntos';
import baserUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class TipopuntosService {

  constructor(private http:HttpClient) {   }
  
  public listarTipopuntos():Observable<Tipopuntos[]>{
    return this.http.get<Tipopuntos[]>(`${baserUrl}/tipopuntos/`);
  }
  public obtenerTipopuntos(idtipopuntos:any):Observable<Tipopuntos>{
    return this.http.get<Tipopuntos>(`${baserUrl}/tipopuntos/${idtipopuntos}`);
  }

  public agregarTipopuntos(tipopuntos:any){
    return this.http.post(`${baserUrl}/tipopuntos/`,tipopuntos);
  }
  public eliminarTipopuntos(idtipopuntos:any){
    return this.http.delete(`${baserUrl}/tipopuntos/${idtipopuntos}`);
  }
  public actualizarTipopuntos(tipopuntos:any){
    return this.http.put(`${baserUrl}/tipopuntos/`,tipopuntos);
  }
}
