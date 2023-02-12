import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { UserActionTypes, Login, LoginSuccess, LoginFailure, Register, RegisterSuccess, RegisterFailure } from './user.actions';

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

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionTypes.USER_LOGIN_SUCCESS, UserActionTypes.USER_REGISTER_SUCCESS),
    map((action: LoginSuccess) => {
      localStorage.setItem('token', action.payload.access_token);
      this.router.navigate(['/projects']);
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }
}
