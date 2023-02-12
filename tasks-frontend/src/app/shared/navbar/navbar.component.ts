import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from 'src/app/project/project';
import { selectProjects } from 'src/app/project/state/project.selectors';
import { Logout, selectUser } from 'src/app/user/state';
import { User } from 'src/app/user/user';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
  user$: Observable<User | null> = this.store.select(selectUser) ;

  projects$: Observable<Project[]> = this.store.select(selectProjects);
  constructor( public nav: NavbarService, private store: Store) {}

  onInit() {
  }

  onLogout() {
    this.store.dispatch(new Logout());
  }
}
