import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http:HttpClient) { }

  uploadFile(formData:FormData): Observable<any>{
    return this.http.post(`${baserUrl}/media/upload`,formData)
  }
}
