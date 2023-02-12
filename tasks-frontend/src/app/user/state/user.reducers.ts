// reducers for user state
// Path: src\app\user\state\user.reducers.ts
import { UserActionTypes, UserActions } from './user.actions';
import { User } from '../user';

export interface UserState {
  isAuthenticated: boolean,
  user: User | null;
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: ''
};

export function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {...action.payload.user, token: action.payload.access_token},
        error: '',
        isAuthenticated: true
      };
    case UserActionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false
      };
    case UserActionTypes.USER_REGISTER:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case UserActionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {...action.payload.user, token: action.payload.access_token},
        error: '',
        isAuthenticated: true
      };
    case UserActionTypes.USER_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Email already exists",
        isAuthenticated: false
      };
    default:
      return state;
  }
}
