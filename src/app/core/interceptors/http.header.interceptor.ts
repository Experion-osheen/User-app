import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = this.getHeaders();

    const request = req.clone({ setHeaders: headers });
    return next.handle(request);
  }

  private getHeaders() {
    const headers = {};

    headers['Content-Type'] = 'application/json';
    headers['Accept'] = 'application/json';

    // get token generated via login here
    const token = 'Token';

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }
}
