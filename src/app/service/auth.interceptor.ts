import { HttpInterceptor,HttpRequest, HttpHandler,HttpEvent, HTTP_INTERCEPTORS} from "@angular/common/http";

import {LoginService} from './login.service';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private loginService:LoginService ){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq= req;
        //console.log("agregamos el interceptor");
        const token = this.loginService.getToken();
        //console.log(token);
        if(token != null){
            authReq=authReq.clone({
                setHeaders:{Authorization:`Bearer ${token}`}
            })
        }
        return next.handle(authReq);
    }

}

export const authInterceptorProviders =[
    {
        provide: HTTP_INTERCEPTORS,
        useClass :AuthInterceptor,
        multi:true
    }
]