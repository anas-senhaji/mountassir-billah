import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectComponent } from './project.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { projectReducer, ProjectEffects } from './state';

const projectRoutes: Routes = [
  { path: 'new', component: ProjectNewComponent },
  { path: ':id', component: ProjectComponent },
  { path: '', component: ProjectComponent },
];

@NgModule({
  declarations: [
    ProjectNewComponent,
    ProjectEditComponent,
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(projectRoutes),
    StoreModule.forFeature('project', projectReducer),
    EffectsModule.forFeature([ProjectEffects]),
  ]
})
export class ProjectModule { }
