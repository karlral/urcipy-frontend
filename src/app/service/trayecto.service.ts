import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trayecto } from '../domain/trayecto';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TrayectoService {

  constructor(private http:HttpClient) {   }
  
  public listarTrayectoes():Observable<Trayecto[]>{
    return this.http.get<Trayecto[]>(`${baserUrl}/trayecto/`);
  }
  public obtenerTrayecto(idtrayecto:any){
    return this.http.get(`${baserUrl}/trayecto/${idtrayecto}`);
  }

  public agregarTrayecto(trayecto:any){
    return this.http.post(`${baserUrl}/trayecto/`,trayecto);
  }
  public eliminarTrayecto(idtrayecto:any){
    return this.http.delete(`${baserUrl}/trayecto/${idtrayecto}`);
  }
  public actualizarTrayecto(trayecto:any){
    return this.http.put(`${baserUrl}/trayecto/`,trayecto);
  }
}
