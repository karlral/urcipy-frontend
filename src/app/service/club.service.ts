import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Club } from '../domain/club';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http:HttpClient) {   }
  
  public listarClubes():Observable<Club[]>{
    return this.http.get<Club[]>(`${baserUrl}/club/`);
  }
  public obtenerClub(idclub:any){
    return this.http.get(`${baserUrl}/club/${idclub}`);
  }

  public agregarClub(club:any){
    return this.http.post(`${baserUrl}/club/`,club);
  }
  public eliminarClub(idclub:any){
    return this.http.delete(`${baserUrl}/club/${idclub}`);
  }
  public actualizarClub(club:any){
    return this.http.put(`${baserUrl}/club/`,club);
  }
  public publistarClubesRun():Observable<Club[]>{
    return this.http.get<Club[]>(`${baserUrl}/clubpub/`);
  }
}