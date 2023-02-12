import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavbarService } from '../shared/navbar/navbar.service';
import { LoadProjects } from '../state/projects/project.actions';
import { loadUser } from '../state/user';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{

  constructor(private store: Store, public nav: NavbarService) {}

  ngOnInit(): void {

    this.store.dispatch(new LoadProjects());
    this.nav.show();
  }
}
