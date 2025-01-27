import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../domain/persona';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) {   }
  
  public listarPersonaes():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${baserUrl}/persona/`);
  }
  public obtenerPersona(idpersona:any){
    return this.http.get(`${baserUrl}/persona/${idpersona}`);
  }
  public obtenerPersonaCi(ci:any){
    return this.http.get(`${baserUrl}/persona/ci/${ci}`);
  }
  public agregarPersona(persona:any){
    return this.http.post(`${baserUrl}/persona/`,persona);
  }
  public eliminarPersona(idpersona:any){
    return this.http.delete(`${baserUrl}/persona/${idpersona}`);
  }
  public actualizarPersona(persona:any){
    return this.http.put(`${baserUrl}/persona/`,persona);
  }
  

}