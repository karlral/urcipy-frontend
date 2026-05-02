import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultimio } from '../domain/resultimio';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ResultimioService {

   constructor(private http:HttpClient) {   }
  
  
  public obtenerResultimio(idresultimio:any){
    return this.http.get(`${baserUrl}/resultimio/${idresultimio}`);
  }

  public agregarResultado(resultimio:any):Observable<any>{
    return this.http.post<any>(`${baserUrl}/resultimio/activoone/`,resultimio);
  }
  public inscribirTodos(resultimio:any):Observable<any>{
    return this.http.post<any>(`${baserUrl}/resultimio/inscripgroup/`,resultimio);
  }
}
