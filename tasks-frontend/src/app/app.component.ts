import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavbarService } from './shared/navbar/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tasks-frontend';

  constructor(public nav: NavbarService) { }

  ngOnInit() {
  }
}
