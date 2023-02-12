import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './home/page-not-found.component';

const appRoutes: Routes = [
  { path: 'auth', loadChildren: () =>
    import('./user/user.module').then(m => m.UserModule) },
  { path: 'projects', loadChildren: () =>
    import('./project/project.module').then(m => m.ProjectModule) },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
