import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripcion } from '../domain/custom/inscripcion';
import { Punclub } from '../domain/custom/punclub';
import { Punclubpartici } from '../domain/custom/punclubpartici';
import { Puncorredor } from '../domain/custom/puncorredor';
import { Puntocorredor } from '../domain/custom/puntocorredor';
import { Resultado } from '../domain/custom/resultado';

import { Participante } from '../domain/participante';
import baserUrl from './helper';
import system from './helpersys';
import { Inscriptos } from '../domain/custom/inscriptos';

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

  public listarParticipantesActivosComple(activo:any):Observable<Inscriptos[]>{
    return this.http.get<Inscriptos[]>(`${baserUrl}/participante/activo/${activo}`);
  }

/**PUBLICOS */

public inscribirPartiCi(idevento:any,ci:any){
  return this.http.get(`${baserUrl}/participub/inscrip/${idevento}/${ci}`);
}

public listarParticipantesActivos(activo:any):Observable<Inscripcion[]>{
  return this.http.get<Inscripcion[]>(`${baserUrl}/participub/activo/${activo}`);
}

public listarParticipantesByEvento(idevento:any):Observable<Resultado[]>{
  return this.http.get<Resultado[]>(`${baserUrl}/participub/evento/${idevento}`);
}

public listarParticipantesProceso():Observable<Participante[]>{
  return this.http.get<Participante[]>(`${baserUrl}/participub/proceso/`);
}

public pubListarPuntajeCorredor():Observable<Puncorredor[]>{
  return this.http.get<Puncorredor[]>(`${baserUrl}/participub/puntaje/`);
}

public pubListarPuntosByIdCorredor(idcorredor:any):Observable<Puntocorredor[]>{
  return this.http.get<Puntocorredor[]>(`${baserUrl}/participub/puntaje/${idcorredor}`);
}
public pubListarPuntosInClub(tipo:any):Observable<Punclub[]>{
  return this.http.get<Punclub[]>(`${baserUrl}/participub/punclub/${tipo}/${system}`);
}
public pubListarPuntosByClubPartici(tipo:any,idclub:any):Observable<Punclubpartici[]>{
  return this.http.get<Punclubpartici[]>(`${baserUrl}/participub/punclubreg/${tipo}/${idclub}/${system}`);
}
}
