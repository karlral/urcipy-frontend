import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Corredor } from '../domain/corredor';
import baserUrl from './helper';
import { Corredormen } from '../domain/custom/corredormen';

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
  public obtenerCorredorCi(ci:any):Observable<Corredor>{
    return this.http.get<Corredor>(`${baserUrl}/corredor/ci/${ci}`);
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

  public listarCorredoresmen(buscado:string):Observable<Corredormen[]>{
    return this.http.get<Corredormen[]>(`${baserUrl}/corredor/bus/${buscado}`);
  }
  public puntuarCorredor(idcorredor:any){
    return this.http.put(`${baserUrl}/corredor/puntua/`,idcorredor);
  }
  public despuntuarCorredor(idcorredor:any){
    return this.http.put(`${baserUrl}/corredor/despuntua/`,idcorredor);
  }
  /**PUBLICOS */
  public pubObtenerCorredorCi(ci:any){
    return this.http.get(`${baserUrl}/correpub/${ci}`);
  }
}