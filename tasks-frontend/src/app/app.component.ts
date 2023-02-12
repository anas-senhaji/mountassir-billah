import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavbarService } from './shared/navbar/navbar.service';
import { loadUser } from './state/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tasks-frontend';

  constructor(public nav: NavbarService, private store: Store) { }

  ngOnInit() {
  }
}
