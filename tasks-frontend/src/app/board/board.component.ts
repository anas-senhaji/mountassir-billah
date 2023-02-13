import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavbarService } from '../shared/navbar/navbar.service';
import { BoardService } from './board.service';
import { Board } from './board';
import { Column } from './column/column';
import { selectBoard } from '../state/board/board.selectors';
import { BoardActions } from '../state/board';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  board$: Observable<Board> = this.store.select(selectBoard);
  columns: Column[] = [];

  constructor(public nav: NavbarService, private store: Store, private boardService: BoardService, private route: ActivatedRoute) {
    nav.show()
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.store.dispatch({type: BoardActions.loadBoard.type, payload: params['id']});
    });
  }

  addColumn(event: any) {
    this.columns.push({name: event.target.value, cards: []} as Column);
    event.target.value = '';
    event.target.blur();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
