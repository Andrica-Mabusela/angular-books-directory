import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('used the interceptor')
    const token = localStorage.getItem('token')
    // request = request.clone({
    //   headers: request.headers.set('Authorization', `Bearer ${token}`)
    // })

    let tokenizedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer xx.yy.zz`
      }
    })

    return next.handle(request);
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
