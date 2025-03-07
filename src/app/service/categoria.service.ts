import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../domain/categoria';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

 
  constructor(private http:HttpClient) {   }
  
  public listarCategoriaes():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${baserUrl}/categoria/`);
  }
  
  public listarCategoriaesMod(idmodalidad:any):Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${baserUrl}/categoria/mod/${idmodalidad}`);
  }
  
  public obtenerCategoria(idcategoria:any){
    return this.http.get(`${baserUrl}/categoria/${idcategoria}`);
  }

  public agregarCategoria(categoria:any){
    return this.http.post(`${baserUrl}/categoria/`,categoria);
  }
  public eliminarCategoria(idcategoria:any){
    return this.http.delete(`${baserUrl}/categoria/${idcategoria}`);
  }
  public actualizarCategoria(categoria:any){
    return this.http.put(`${baserUrl}/categoria/`,categoria);
  }

  public listarCategoriaActivo():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${baserUrl}/categoriapub/`);
  }
  public listarCategoriaActivoNino():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${baserUrl}/categoriapub/nino`);
  }
}