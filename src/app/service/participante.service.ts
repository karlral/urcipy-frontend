import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participante } from '../domain/participante';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  constructor(private http:HttpClient) {   }
  
  public listarParticipantees():Observable<Participante[]>{
    return this.http.get<Participante[]>(`${baserUrl}/participante/`);
  }
  public obtenerParticipante(idparticipante:any){
    return this.http.get(`${baserUrl}/participante/${idparticipante}`);
  }

  public agregarParticipante(participante:any){
    return this.http.post(`${baserUrl}/participante/`,participante);
  }
  public eliminarParticipante(idparticipante:any){
    return this.http.delete(`${baserUrl}/participante/${idparticipante}`);
  }
  public actualizarParticipante(participante:any){
    return this.http.put(`${baserUrl}/participante/`,participante);
  }
}
