import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavbarService } from '../shared/navbar/navbar.service';
import { BoardService } from './board.service';
import { Board } from './board';
import { Column } from './column/column';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  board: Board = {} as Board;
  columns: Column[] = [];

  constructor(public nav: NavbarService, private store: Store, private boardService: BoardService, private route: ActivatedRoute) {
    nav.show()
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.boardService.getBoard(+params['id']).subscribe((board:any) => {
        this.board = board.board;
        this.columns = this.board.columns ?? [];
      })
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
