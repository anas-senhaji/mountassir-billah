import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardEditComponent } from './board-edit/board-edit.component';
import { ColumnComponent } from './column/column.component';
import { CardComponent } from './column/card/card.component';
import { RouterModule, Routes } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { boardReducer } from '../state/board/board.reducers';
import { StoreModule } from '@ngrx/store';

const boardRoutes: Routes = [
  { path: ':id', component: BoardComponent },
];

@NgModule({
  declarations: [
    BoardComponent,
    BoardEditComponent,
    ColumnComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild(boardRoutes),
    StoreModule.forFeature('board', boardReducer),
  ]
})
export class BoardModule { }
