import { userReducer, UserState } from "./user/";
import { projectReducer, ProjectsState } from "./projects";
import { ActionReducerMap } from "@ngrx/store";

// define app state from ProjectState and UserState
export interface AppState {
  projects: ProjectsState;
  user: UserState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  projects: projectReducer,
  user: userReducer
};
