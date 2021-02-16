import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class InterceptorService implements HttpInterceptor{
  intercept( req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
     let modifiedrequest = req.clone({ url: 'https://serve-last-fm.herokuapp.com' + req.url});
     return next.handle(modifiedrequest);
  }


}
