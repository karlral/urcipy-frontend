import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concepto } from '../domain/concepto';
import baserUrl from './helper';
import system from './helpersys';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {

 
  constructor(private http:HttpClient) {   }
  
  public listarConceptoes():Observable<Concepto[]>{
    return this.http.get<Concepto[]>(`${baserUrl}/concepto/system/${system}`);
  }
  public obtenerConcepto(idconcepto:any){
    return this.http.get(`${baserUrl}/concepto/${idconcepto}`);
  }

  public agregarConcepto(concepto:any){
    return this.http.post(`${baserUrl}/concepto/`,concepto);
  }
  public eliminarConcepto(idconcepto:any){
    return this.http.delete(`${baserUrl}/concepto/${idconcepto}`);
  }
  public actualizarConcepto(concepto:any){
    return this.http.put(`${baserUrl}/concepto/`,concepto);
  }
}