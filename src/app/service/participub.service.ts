import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participante } from '../domain/participante';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ParticipubService {

  constructor(private http:HttpClient) {   }
  
  public inscribirPartiCi(ci:any){
    return this.http.get(`${baserUrl}/participub/${ci}`);
  }

  public listarParticipantesActivos(activo:any):Observable<Participante[]>{
    return this.http.get<Participante[]>(`${baserUrl}/participub/activo/${activo}`);
  }
  
}
