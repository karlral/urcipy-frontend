import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Remera } from '../domain/remera';
import baserUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class RemeraService {

  constructor(private http:HttpClient) {   }
  
  public listarRemeraes():Observable<Remera[]>{
    return this.http.get<Remera[]>(`${baserUrl}/remera/`);
  }
  public obtenerRemera(idremera:any):Observable<Remera>{
    return this.http.get<Remera>(`${baserUrl}/remera/${idremera}`);
  }

  public agregarRemera(remera:any){
    return this.http.post(`${baserUrl}/remera/`,remera);
  }
  public eliminarRemera(idremera:any){
    return this.http.delete(`${baserUrl}/remera/${idremera}`);
  }
  public actualizarRemera(remera:any){
    return this.http.put(`${baserUrl}/remera/`,remera);
  }


}