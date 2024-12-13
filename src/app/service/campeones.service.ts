import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campeones } from '../domain/campeones';
import { Anhocat } from '../domain/custom/anhocat';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CampeonesService {

  constructor(private http:HttpClient) {   }
  
  public listarCampeoneses():Observable<Campeones[]>{
    return this.http.get<Campeones[]>(`${baserUrl}/campeones/`);
  }
  public listarCampeones():Observable<Campeones[]>{
    return this.http.get<Campeones[]>(`${baserUrl}/campeones/anho`);
  }
  public obtenerCampeones(idcampeones:any){
    return this.http.get(`${baserUrl}/campeones/${idcampeones}`);
  }

  public agregarCampeones(campeones:any){
    return this.http.post(`${baserUrl}/campeones/`,campeones);
  }
  public eliminarCampeones(idcampeones:any){
    return this.http.delete(`${baserUrl}/campeones/${idcampeones}`);
  }
  public actualizarCampeones(campeones:any){
    return this.http.put(`${baserUrl}/campeones/`,campeones);
  }

  public procesarCampeones(){
    return this.http.post(`${baserUrl}/procesar/`,0);
    
  }

  /**PUBLICOS */
  public obtenerAnhoCategorias():Observable<Anhocat[]>{
    return this.http.get<Anhocat[]>(`${baserUrl}/campeonespub/`);
  }
  public listaCampeonesAnhoCat(idcat:any):Observable<Campeones[]>{
    return this.http.get<Campeones[]>(`${baserUrl}/campeonespub/${idcat}`);
  }
}


