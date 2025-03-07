import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modalidad } from '../domain/modalidad';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {
  constructor(private http:HttpClient) {   }
  
  public listarModalidades():Observable<Modalidad[]>{
    return this.http.get<Modalidad[]>(`${baserUrl}/modalidad/`);
  }
  public obtenerModalidad(idmodalidad:any){
    return this.http.get(`${baserUrl}/modalidad/${idmodalidad}`);
  }

  public agregarModalidad(modalidad:any){
    return this.http.post(`${baserUrl}/modalidad/`,modalidad);
  }
  public eliminarModalidad(idmodalidad:any){
    return this.http.delete(`${baserUrl}/modalidad/${idmodalidad}`);
  }
  public actualizarModalidad(modalidad:any){
    return this.http.put(`${baserUrl}/modalidad/`,modalidad);
  }

 
}
