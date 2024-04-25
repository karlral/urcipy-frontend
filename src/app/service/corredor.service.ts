import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Corredor } from '../domain/corredor';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CorredorService {

  constructor(private http:HttpClient) {   }
  
  public listarCorredores():Observable<Corredor[]>{
    return this.http.get<Corredor[]>(`${baserUrl}/corredor/`);
  }
  public obtenerCorredor(idcorredor:any){
    return this.http.get(`${baserUrl}/corredor/${idcorredor}`);
  }

  public agregarCorredor(corredor:any){
    return this.http.post(`${baserUrl}/corredor/`,corredor);
  }
  public eliminarCorredor(idcorredor:any){
    return this.http.delete(`${baserUrl}/corredor/${idcorredor}`);
  }
  public actualizarCorredor(corredor:any){
    return this.http.put(`${baserUrl}/corredor/`,corredor);
  }
  /**PUBLICOS */
  public pubObtenerCorredorCi(ci:any){
    return this.http.get(`${baserUrl}/correpub/${ci}`);
  }
}