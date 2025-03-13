import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimiento } from '../domain/movimiento';
import baserUrl from './helper';
import system from './helpersys';
import { Corredorank } from '../domain/custom/corredorank';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

 
  constructor(private http:HttpClient) {   }
  
  public listarMovimientoes():Observable<Movimiento[]>{
    return this.http.get<Movimiento[]>(`${baserUrl}/movimiento/system/${system}`);
  }
  public listarMovimientosRanking():Observable<Corredorank[]>{
    return this.http.get<Corredorank[]>(`${baserUrl}/movimiento/ranking/${system}`);
  }
  public obtenerMovimiento(idmovimiento:any){
    return this.http.get(`${baserUrl}/movimiento/${idmovimiento}`);
  }

  public agregarMovimiento(movimiento:any){
    return this.http.post(`${baserUrl}/movimiento/`,movimiento);
  }
  public eliminarMovimiento(idmovimiento:any){
    return this.http.delete(`${baserUrl}/movimiento/${idmovimiento}`);
  }
  public actualizarMovimiento(movimiento:any){
    return this.http.put(`${baserUrl}/movimiento/`,movimiento);
  }

  /*****PUBLICOS */
  public busMovimientosRankingPub(ci:any):Observable<Corredorank>{
    return this.http.get<Corredorank>(`${baserUrl}/movipub/${ci}/${system}`);
  }

  public listarMovimientosRankingPub():Observable<Corredorank[]>{
    return this.http.get<Corredorank[]>(`${baserUrl}/movipub/ranking/${system}`);
  }
}