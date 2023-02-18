import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';
import { BoardActions, selectBoard, selectBoardColumns } from 'src/app/state/board';
import { Board } from '../board';
import { BoardService } from '../board.service';
import { Column } from '../column/column';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent {
  board$: Observable<Board> = this.store.select(selectBoard);
  columns$: Observable<Column[]> | any = this.store.select(selectBoardColumns).subscribe(columns => this.columns = columns);
  columns: Column[] | any = [];
  currentBoardId: number | undefined;

  constructor(public nav: NavbarService, private store: Store, private boardService: BoardService, private route: ActivatedRoute) {
    nav.show()
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentBoardId = +params['id'];
      this.store.dispatch({
        type: BoardActions.loadBoard.type,
        payload: this.currentBoardId
      });
    });
  }

  addColumn(event: any) {
    this.store.dispatch({
      type: BoardActions.addColumn.type,
      payload: {
        name: event.target.value,
        board_id: this.currentBoardId
      }
    });
    event.target.value = '';
    event.target.blur();
  }

  drop(event: CdkDragDrop<Observable<string[]>>) {
    console.log(event);

    moveItemInArray([...this.columns], event.previousIndex, event.currentIndex);
  }
}

