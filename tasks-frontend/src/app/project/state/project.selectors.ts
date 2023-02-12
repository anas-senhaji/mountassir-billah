import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProjectState } from "./project.reducers";
import { projectReducer } from "./project.reducers";
import { Project } from "../project";
import { ProjectActions } from "./project.actions";

export const selectProjectState = createFeatureSelector<ProjectState>('project');

export const selectProject = createSelector(
  selectProjectState,
  (state: ProjectState) => state.projects
);

export const selectProjectLoading = createSelector(
  selectProjectState,
  (state: ProjectState) => state.loading
);

export const selectProjectError = createSelector(
  selectProjectState,
  (state: ProjectState) => state.error
);

export const selectCurrentProjectId = createSelector(
  selectProjectState,
  (state: ProjectState) => state.currentProjectId
);

export const selectCurrentProject = createSelector(
  selectProject,
  selectCurrentProjectId,
  (projects: Project[], currentProjectId: number | null | undefined) => {
    if (currentProjectId === 0) {
      return {
        id: 0,
        name: '',
        description: '',
        status: 'Active'
      };
    } else {
      return currentProjectId ? projects.find(p => p.id === currentProjectId) : null;
    }
  }
);

export const selectProjectStatus = createSelector(
  selectProject,
  (projects: Project[]) => {
    const status = {
      Active: 0,
      Inactive: 1,
      Completed: 2
    };
    projects.forEach(p => {
      status[p.status] += 1;
    });
    return status;
  }
);

export const selectProjectStatusCount = createSelector(
  selectProjectStatus,
  (status: any) => {
    return Object.keys(status).map(key => status[key]);
  }
);

