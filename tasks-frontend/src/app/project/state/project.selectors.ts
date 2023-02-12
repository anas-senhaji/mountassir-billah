import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProjectsState } from "./project.reducers";
import { Project } from "../project";

export const selectProjectState = createFeatureSelector<ProjectsState>('project');

export const selectProjects = createSelector(
  selectProjectState,
  (state: ProjectsState) => state.projects
);

export const selectProjectsLoading = createSelector(
  selectProjectState,
  (state: ProjectsState) => state.loading
);

export const selectProjectsError = createSelector(
  selectProjectState,
  (state: ProjectsState) => state.error
);

export const selectCurrentProjectId = createSelector(
  selectProjectState,
  (state: ProjectsState) => state.currentProjectId
);

export const selectCurrentProject = createSelector(
  selectProjects,
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
  selectProjects,
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

