import { Action } from "@ngrx/store";
import { Project } from "../../project/project";

export enum ProjectActionTypes {
  LOAD_PROJECTS = '[Project] Load Projects',
  LOAD_PROJECTS_SUCCESS = '[Project] Load Projects Success',
  LOAD_PROJECTS_FAILURE = '[Project] Load Projects Failure',
  LOAD_PROJECT = '[Project] Load Project',
  LOAD_PROJECT_SUCCESS = '[Project] Load Project Success',
  LOAD_PROJECT_FAILURE = '[Project] Load Project Failure',
  CREATE_PROJECT = '[Project] Create Project',
  CREATE_PROJECT_SUCCESS = '[Project] Create Project Success',
  CREATE_PROJECT_FAILURE = '[Project] Create Project Failure',
  UPDATE_PROJECT = '[Project] Update Project',
  UPDATE_PROJECT_SUCCESS = '[Project] Update Project Success',
  UPDATE_PROJECT_FAILURE = '[Project] Update Project Failure',
  DELETE_PROJECT = '[Project] Delete Project',
  DELETE_PROJECT_SUCCESS = '[Project] Delete Project Success',
  DELETE_PROJECT_FAILURE = '[Project] Delete Project Failure'
}

export class LoadProjects implements Action {
  readonly type = ProjectActionTypes.LOAD_PROJECTS;
}

export class LoadProjectsSuccess implements Action {
  readonly type = ProjectActionTypes.LOAD_PROJECTS_SUCCESS;
  constructor(public payload: Project[]) { }
}

export class LoadProjectsFailure implements Action {
  readonly type = ProjectActionTypes.LOAD_PROJECTS_FAILURE;
  constructor(public payload: any) { }
}

export class LoadProject implements Action {
  readonly type = ProjectActionTypes.LOAD_PROJECT;
  constructor(public payload: number) { }
}

export class LoadProjectSuccess implements Action {
  readonly type = ProjectActionTypes.LOAD_PROJECT_SUCCESS;
  constructor(public payload: Project) { }
}

export class LoadProjectFailure implements Action {
  readonly type = ProjectActionTypes.LOAD_PROJECT_FAILURE;
  constructor(public payload: any) { }
}

export class CreateProject implements Action {
  readonly type = ProjectActionTypes.CREATE_PROJECT;
  constructor(public payload: Project) { }
}

export class CreateProjectSuccess implements Action {
  readonly type = ProjectActionTypes.CREATE_PROJECT_SUCCESS;
  constructor(public payload: Project) { }
}

export class CreateProjectFailure implements Action {
  readonly type = ProjectActionTypes.CREATE_PROJECT_FAILURE;
  constructor(public payload: any) { }
}

export class UpdateProject implements Action {
  readonly type = ProjectActionTypes.UPDATE_PROJECT;
  constructor(public payload: Project) { }
}

export class UpdateProjectSuccess implements Action {
  readonly type = ProjectActionTypes.UPDATE_PROJECT_SUCCESS;
  constructor(public payload: Project) { }
}

export class UpdateProjectFailure implements Action {
  readonly type = ProjectActionTypes.UPDATE_PROJECT_FAILURE;
  constructor(public payload: any) { }
}

export class DeleteProject implements Action {
  readonly type = ProjectActionTypes.DELETE_PROJECT;
  constructor(public payload: number) { }
}

export class DeleteProjectSuccess implements Action {
  readonly type = ProjectActionTypes.DELETE_PROJECT_SUCCESS;
  constructor(public payload: number) { }
}

export class DeleteProjectFailure implements Action {
  readonly type = ProjectActionTypes.DELETE_PROJECT_FAILURE;
  constructor(public payload: string) { }
}

export type ProjectActions = LoadProjects | LoadProjectsSuccess | LoadProjectsFailure | LoadProject | LoadProjectSuccess | LoadProjectFailure | CreateProject | CreateProjectSuccess | CreateProjectFailure | UpdateProject | UpdateProjectSuccess | UpdateProjectFailure | DeleteProject | DeleteProjectSuccess | DeleteProjectFailure;
