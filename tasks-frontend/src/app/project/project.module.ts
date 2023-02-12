import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectComponent } from './project.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { projectReducer } from '../state/projects';

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
    StoreModule.forFeature('projects', projectReducer),
  ]
})
export class ProjectModule { }
