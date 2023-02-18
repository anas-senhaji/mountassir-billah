import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { NavbarService } from "../shared/navbar/navbar.service";
import { BoardActions, selectBoards, selectPagination } from "../state/board";
import { Board } from "./board";



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  boards$: Observable<any> = this.store.select(selectBoards);
  links$: Observable<any> = this.store.select(selectPagination);

  constructor(private nav: NavbarService, private store: Store) { }

  ngOnInit() {
    this.nav.show();
    this.store.dispatch(BoardActions.loadBoards({payload: null}));
  }

  loadPage(page: any) {
    this.store.dispatch(BoardActions.loadPage({payload: page.url}));
  }
}
