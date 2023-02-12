import { Action } from '@ngrx/store';

export enum UserActionTypes {
  USER_LOGIN = '[User] User Login',
  USER_LOGIN_SUCCESS = '[User] User Login Success',
  USER_LOGIN_FAILURE = '[User] User Login Failure',
  USER_REGISTER = '[User] User Register',
  USER_REGISTER_SUCCESS = '[User] User Register Success',
  USER_REGISTER_FAILURE = '[User] User Register Failure',
  USER_LOGOUT = '[User] User Logout',
  USER_LOAD = '[User] User Load',
  USER_LOAD_FROM_LOCAL_STORAGE = '[User] User Load From Local Storage'
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

export class Logout implements Action {
  readonly type = UserActionTypes.USER_LOGOUT;
  constructor(public tokenKey: string) {}
}

export class loadUser implements Action {
  readonly type = UserActionTypes.USER_LOAD;
}

export class loadUserFromLocalStorage implements Action {
  readonly type = UserActionTypes.USER_LOAD_FROM_LOCAL_STORAGE;
  constructor(public payload: any) {}
}

export type UserActions = Login | LoginSuccess | LoginFailure | Register | RegisterSuccess | RegisterFailure | Logout | loadUser | loadUserFromLocalStorage;


