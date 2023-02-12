import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardEditComponent } from './board-edit/board-edit.component';
import { ColumnComponent } from './column/column.component';
import { CardComponent } from './column/card/card.component';
import { RouterModule, Routes } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';

const boardRoutes: Routes = [
  { path: '', component: BoardComponent },
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
  ]
})
export class BoardModule { }
