import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dorsal } from '../domain/dorsal';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DorsalService {

 
  constructor(private http:HttpClient) {   }
  
  public listarDorsales():Observable<Dorsal[]>{
    return this.http.get<Dorsal[]>(`${baserUrl}/dorsal/`);
  }
  public obtenerDorsal(iddorsal:any):Observable<Dorsal>{
    return this.http.get<Dorsal>(`${baserUrl}/dorsal/${iddorsal}`);
  }

  public agregarDorsal(dorsal:any){
    return this.http.post(`${baserUrl}/dorsal/`,dorsal);
  }
  public eliminarDorsal(iddorsal:any){
    return this.http.delete(`${baserUrl}/dorsal/${iddorsal}`);
  }
  public actualizarDorsal(dorsal:any){
    return this.http.put(`${baserUrl}/dorsal/`,dorsal);
  }
  public publistarDorsales():Observable<Dorsal[]>{
    return this.http.get<Dorsal[]>(`${baserUrl}/dorsalpub/`);
  }
}