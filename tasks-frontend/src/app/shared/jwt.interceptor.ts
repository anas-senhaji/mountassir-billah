
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoginSuccess, Logout, selectUser, UserState } from '../state/user';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class JwtInterceptor implements HttpInterceptor {
  constructor(private store: Store<UserState>) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if (token &&
      (!request.url.includes('login') || !request.url.includes('register'))) {

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(request).pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            // this.store.dispatch(new Logout(token as string));
          }
          throw new Error("Token expired");
        })
      );
    }
    return next.handle(request);
  }
}
