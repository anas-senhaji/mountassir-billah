
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { first, flatMap, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUser, UserState } from '../user/state';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class JwtInterceptor implements HttpInterceptor {
  constructor(private store: Store<UserState>) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request) || this.store.select(selectUser).pipe(
      first(),
      flatMap(user => {
        const authReq = !!user?.token ? request.clone({
          setHeaders: { Authorization: 'Bearer ' + user.token },
        }) : request;
        return next.handle(authReq);
      }),
    );
  }
}
