import { Action } from '@ngrx/store';

export enum UserActionTypes {
  USER_LOGIN = '[User] User Login',
  USER_LOGIN_SUCCESS = '[User] User Login Success',
  USER_LOGIN_FAILURE = '[User] User Login Failure',
  USER_REGISTER = '[User] User Register',
  USER_REGISTER_SUCCESS = '[User] User Register Success',
  USER_REGISTER_FAILURE = '[User] User Register Failure'
}

export class Login implements Action {
  readonly type = UserActionTypes.USER_LOGIN;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = UserActionTypes.USER_LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = UserActionTypes.USER_LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class Register implements Action {
  readonly type = UserActionTypes.USER_REGISTER;
  constructor(public payload: any) {}
}

export class RegisterSuccess implements Action {
  readonly type = UserActionTypes.USER_REGISTER_SUCCESS;
  constructor(public payload: any) {}
}

export class RegisterFailure implements Action {
  readonly type = UserActionTypes.USER_REGISTER_FAILURE;
  constructor(public payload: any) {}
}

export type UserActions = Login | LoginSuccess | LoginFailure | Register | RegisterSuccess | RegisterFailure;


