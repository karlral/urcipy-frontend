import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Historial } from '../domain/historial';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http:HttpClient) { }

  public pubListarCorredor(ci:any):Observable<Historial[]>{
    return this.http.get<Historial[]>(`${baserUrl}/historialpub/${ci}`);
  }
}
