import { userReducer, UserState } from "./user/";
import { projectReducer, ProjectsState } from "./projects";
import { ActionReducerMap } from "@ngrx/store";
import { boardReducer, BoardState } from "./board";

// define app state from ProjectState and UserState
export interface AppState {
  projects: ProjectsState;
  user: UserState;
  board: BoardState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  projects: projectReducer,
  user: userReducer,
  board: boardReducer
};
