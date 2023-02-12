import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProjectService } from '../project.service';
import { ProjectActionTypes, LoadProjectsSuccess, LoadProjectsFailure } from './project.actions';

@Injectable()
export class ProjectEffects {

    loadProjects$ = createEffect(() => this.actions$.pipe(
      ofType(ProjectActionTypes.LOAD_PROJECTS),
      switchMap(() => this.projectService.getProjects().pipe(
        map((res: any) => new LoadProjectsSuccess(res.data)),
        catchError(err => of(new LoadProjectsFailure(err)))
      ))
    ));

    createProject$ = createEffect(() => this.actions$.pipe(
      ofType(ProjectActionTypes.CREATE_PROJECT),
      switchMap((action: any) => this.projectService.createProject(action.payload).pipe(
        map((res: any) => new LoadProjectsSuccess(res.data)),
        catchError(err => of(new LoadProjectsFailure(err)))
      ))
    ));

    constructor(
      private actions$: Actions,
      private projectService: ProjectService
    ) { }
  }

