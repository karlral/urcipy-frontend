import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignacion } from '../domain/asignacion';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

 
  constructor(private http:HttpClient) {   }
  
  public listarAsignaciones():Observable<Asignacion[]>{
    return this.http.get<Asignacion[]>(`${baserUrl}/asignacion/`);
  }
  public obtenerAsignacion(idasignacion:any){
    return this.http.get(`${baserUrl}/asignacion/${idasignacion}`);
  }

  public agregarAsignacion(asignacion:any){
    return this.http.post(`${baserUrl}/asignacion/`,asignacion);
  }
  public eliminarAsignacion(idasignacion:any){
    return this.http.delete(`${baserUrl}/asignacion/${idasignacion}`);
  }
  public actualizarAsignacion(asignacion:any){
    return this.http.put(`${baserUrl}/asignacion/`,asignacion);
  }
}