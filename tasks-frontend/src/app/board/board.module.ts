import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardEditComponent } from './board-edit/board-edit.component';
import { ColumnComponent } from './column/column.component';
import { CardComponent } from './column/card/card.component';



@NgModule({
  declarations: [
    BoardComponent,
    BoardEditComponent,
    ColumnComponent,
    CardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class BoardModule { }
