import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../user/auth.service';
import { UserActionTypes, Login, LoginSuccess, LoginFailure, Register, RegisterSuccess, RegisterFailure, Logout, loadUserFromLocalStorage, loadUser } from './user.actions';

@Injectable()
export class UserEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionTypes.USER_LOGIN),
    switchMap((action: Login) => this.authService.login(action.payload).pipe(
      map((res: any) => new LoginSuccess(res)),
      catchError(err => of(new LoginFailure(err)))
    ))
  ));

  register$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionTypes.USER_REGISTER),
    switchMap((action: Register) => this.authService.register(action.payload).pipe(
      map((res: any) => new RegisterSuccess(res)),
      catchError(err => of(new RegisterFailure(err)))
    ))
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionTypes.USER_LOGOUT),
    switchMap((action: Logout) => this.authService.logout(action.tokenKey).pipe(
      map(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/auth', 'login']);
      }),
      catchError(err => of("Could not logout"))
    ))), { dispatch: false });

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionTypes.USER_LOGIN_SUCCESS, UserActionTypes.USER_REGISTER_SUCCESS),
    map((action: LoginSuccess | RegisterSuccess) => {
      localStorage.setItem('token', action.payload.access_token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      this.router.navigate(['/boards']);
    })
  ), { dispatch: false });

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionTypes.USER_LOAD),
    map((action: loadUser) => {
      const user = JSON.parse(localStorage.getItem('user') ?? '') as any;
      const token = localStorage.getItem('token') as string;
      console.log("inside effect");

      if (user && token) {
        return new loadUserFromLocalStorage(user);
      }
      return new Logout(token);
    })
  ));

  loadUserFromLocalStorage$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionTypes.USER_LOAD_FROM_LOCAL_STORAGE),
    map((action: loadUserFromLocalStorage) => {
      console.log(action.payload);
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }
}
