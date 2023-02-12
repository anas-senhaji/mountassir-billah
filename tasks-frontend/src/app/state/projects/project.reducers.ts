import { ProjectActionTypes, ProjectActions } from './project.actions';
import { Project } from '../../project/project';

export interface ProjectsState {
  projects: Project[];
  currentProjectId?: number | null;
  loading: boolean;
  error: string;
}

const initialState: ProjectsState = {
  projects: [],
  currentProjectId: null,
  loading: false,
  error: ''
};

export function projectReducer(state = initialState, action: ProjectActions): ProjectsState {
  switch (action.type) {
    case ProjectActionTypes.LOAD_PROJECTS:
      return {
        ...state,
        loading: true,
      };
    case ProjectActionTypes.LOAD_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
        error: ''
      };
    case ProjectActionTypes.LOAD_PROJECTS_FAILURE:
      return {
        ...state,
        projects: [],
        loading: false,
        error: action.payload
      };
    case ProjectActionTypes.LOAD_PROJECT:
      return {
        ...state,
        loading: true,
      };
    case ProjectActionTypes.LOAD_PROJECT_SUCCESS:
      return {
        ...state,
        currentProjectId: action.payload.id,
        loading: false,
        error: ''
      };
    case ProjectActionTypes.LOAD_PROJECT_FAILURE:
      return {
        ...state,
        currentProjectId: null,
        loading: false,
        error: action.payload
      };
    case ProjectActionTypes.CREATE_PROJECT:
      return {
        ...state,
        loading: true,
      };
    case ProjectActionTypes.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        loading: false,
        error: ''
      };
    case ProjectActionTypes.CREATE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ProjectActionTypes.UPDATE_PROJECT:
      return {
        ...state,
        loading: true,
      };
    case ProjectActionTypes.UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.map(
          item => action.payload.id === item.id ? action.payload : item
        ),
        loading: false,
        error: ''
      };
    case ProjectActionTypes.UPDATE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ProjectActionTypes.DELETE_PROJECT:
      return {
        ...state,
        loading: true,
      };
    case ProjectActionTypes.DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload),
        loading: false,
        error: ''
      };
    case ProjectActionTypes.DELETE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
