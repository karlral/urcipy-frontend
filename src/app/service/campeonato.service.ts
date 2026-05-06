import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campeonato } from '../domain/campeonato';
import baserUrl from './helper';
import system from './helpersys';


@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  constructor(private http:HttpClient) {   }
  
  public listarCampeonatoes():Observable<Campeonato[]>{
    return this.http.get<Campeonato[]>(`${baserUrl}/campeonato/system/${system}`);
  }
  public obtenerCampeonato(idpuntaje:any):Observable<Campeonato>{
    return this.http.get<Campeonato>(`${baserUrl}/campeonato/${idpuntaje}`);
  }

  public agregarCampeonato(campeonato:any){
    return this.http.post(`${baserUrl}/campeonato/`,campeonato);
  }
  public eliminarCampeonato(idpuntaje:any){
    return this.http.delete(`${baserUrl}/campeonato/${idpuntaje}`);
  }
  public actualizarCampeonato(campeonato:any){
    return this.http.put(`${baserUrl}/campeonato/`,campeonato);
  }


}