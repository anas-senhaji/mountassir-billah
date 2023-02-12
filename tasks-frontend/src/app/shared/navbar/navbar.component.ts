import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from 'src/app/project/project';
import { LoadProjects } from 'src/app/state/projects';
import { selectProjects } from 'src/app/state/projects/project.selectors';
import { loadUser, Logout, selectUser } from 'src/app/state/user';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
  user$ = this.store.select(selectUser);

  projects$: Observable<Project[]> = this.store.select(selectProjects);
  constructor( public nav: NavbarService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new loadUser());
    this.store.dispatch(new LoadProjects());
    console.log('after dispatch');

  }

  onLogout() {
    this.store.dispatch(new Logout(localStorage.getItem('token') as string));
  }
}
