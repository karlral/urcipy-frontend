import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor() { }

  public setSystem(regional:any){
    localStorage.setItem('system',JSON.stringify(regional));
  }

  public getSystem(){
    let systemStr=localStorage.getItem('system');
    if (systemStr!= null){
      return JSON.parse(systemStr);
    }else{
      return null;

    }
  }

}
