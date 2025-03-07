import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Corredor } from '../domain/corredor';
import baserUrl from './helper';
import { Corredormen } from '../domain/custom/corredormen';
import { Corredorbus } from '../domain/custom/corredorbus';
import system from './helpersys';

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
    return this.http.get<Corredor>(`${baserUrl}/corredor/ci/${ci}/${system}`);
  }
  public obtenerCorredorCiVacio(ci:any):Observable<any>{
    return this.http.get<any>(`${baserUrl}/corredor/ci/${ci}/${system}`);
  }

  public agregarCorredor(corredor:any):Observable<Corredor>{
    return this.http.post<Corredor>(`${baserUrl}/corredor/`,corredor);
  }
  public eliminarCorredor(idcorredor:any){
    return this.http.delete(`${baserUrl}/corredor/${idcorredor}`);
  }
  public actualizarCorredor(corredor:any){
    return this.http.put(`${baserUrl}/corredor/`,corredor);
  }

  public listarCorredoresmen(buscado:string):Observable<Corredormen[]>{
    return this.http.get<Corredormen[]>(`${baserUrl}/corredor/men/${buscado}/${system}`);
  }
  public listarCorredoresbus(buscado:string):Observable<Corredorbus[]>{
    return this.http.get<Corredorbus[]>(`${baserUrl}/corredor/bus/${buscado}/${system}`);
  }
  public puntuarCorredor(idcorredor:any){
    return this.http.put(`${baserUrl}/corredor/puntua/`,idcorredor);
  }
  public despuntuarCorredor(idcorredor:any){
    return this.http.put(`${baserUrl}/corredor/despuntua/`,idcorredor);
  }
  /**PUBLICOS */
  public pubObtenerCorredorCi(ci:any){
    return this.http.get(`${baserUrl}/correpub/${ci}/${system}`);
  }
  public pubObtenerCorredorbusCi(ci:any):Observable<Corredorbus>{
    return this.http.get<Corredorbus>(`${baserUrl}/correpub/busci/${ci}/${system}`);
  }
  public pubObtenerCorredorbusCiRun(ci:any):Observable<Corredorbus>{
    return this.http.get<Corredorbus>(`${baserUrl}/correpub/busci/${ci}/4`);
  }
  public agregarCorredorRun(corredor:any):Observable<Corredor>{
    return this.http.post<Corredor>(`${baserUrl}/correpub/`,corredor);
  }

  public actualizarCorredorRun(corredor:any){
    return this.http.put(`${baserUrl}/correpub/actuacatam/`,corredor);
  }
}