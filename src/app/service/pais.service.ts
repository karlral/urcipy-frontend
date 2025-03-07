import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../domain/pais';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

 
  constructor(private http:HttpClient) {   }
  
  public listarPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(`${baserUrl}/pais/`);
  }
  public obtenerPais(idpais:any){
    return this.http.get(`${baserUrl}/pais/${idpais}`);
  }

  public agregarPais(pais:any){
    return this.http.post(`${baserUrl}/pais/`,pais);
  }
  public eliminarPais(idpais:any){
    return this.http.delete(`${baserUrl}/pais/${idpais}`);
  }
  public actualizarPais(pais:any){
    return this.http.put(`${baserUrl}/pais/`,pais);
  }
  public publistarPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(`${baserUrl}/paispub/`);
  }
}