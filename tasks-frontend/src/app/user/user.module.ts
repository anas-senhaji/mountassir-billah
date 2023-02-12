import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../state/user';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('user', userReducer)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class UserModule { }
