import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LoadingInterceptor } from './shared/loading.interceptor';
import { JwtInterceptor } from './shared/jwt.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarService } from './shared/navbar/navbar.service';
import { reducers } from './state/app-state';
import { UserEffects } from './state/user';
import { ProjectEffects } from './state/projects';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([UserEffects, ProjectEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Tasks Demo App DevTools',
      maxAge: 25,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
