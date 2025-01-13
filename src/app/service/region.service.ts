import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../domain/region';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  constructor(private http:HttpClient) {   }
  
  public listarRegiones():Observable<Region[]>{
    return this.http.get<Region[]>(`${baserUrl}/region/`);
  }
  public obtenerRegion(idregion:any){
    return this.http.get(`${baserUrl}/region/${idregion}`);
  }

  public agregarRegion(region:any){
    return this.http.post(`${baserUrl}/region/`,region);
  }
  public eliminarRegion(idregion:any){
    return this.http.delete(`${baserUrl}/region/${idregion}`);
  }
  public actualizarRegion(region:any){
    return this.http.put(`${baserUrl}/region/`,region);
  }

  //publicos
  public obtenerRegionPub(idregion:any):Observable<Region>{
    return this.http.get<Region>(`${baserUrl}/regionpub/${idregion}`);
  }
}
