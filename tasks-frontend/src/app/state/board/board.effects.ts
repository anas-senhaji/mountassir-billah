import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Column } from 'src/app/board/column/column';
import { BoardService } from '../../board/board.service';
import { BoardActions } from './board.actions';

@Injectable()
export class BoardEffects {

  constructor(private actions$: Actions, private boardService: BoardService, private route: Router) { }

  loadBoards$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.loadBoards),
    switchMap(() => this.boardService.getBoards().pipe(
      map((boards: any) => BoardActions.loadBoardsSuccess(boards)),
      catchError(err => of(BoardActions.loadBoardsFailure(err)))
    ))
  ));

  loadPage$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.loadPage),
    switchMap((action: any) => this.boardService.getBoards(action.payload).pipe(
      map((boards: any) => BoardActions.loadPageSuccess(boards))
    ))
  ));

  loadBoard$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.loadBoard),
    switchMap((action: any) => this.boardService.getBoard(action.payload).pipe(
      map((board: any) => BoardActions.loadBoardSuccess(board)),
      catchError(err => of(BoardActions.loadBoardFailure(err)))
    ))
  ));

  createBoard$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.createBoard),
    switchMap((action: any) => this.boardService.createBoard(action.payload).pipe(
      map((board: any) => BoardActions.createBoardSuccess(board)),
      catchError(err => of(BoardActions.createBoardFailure(err)))
    ))
  ));

  createBoardSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.createBoardSuccess),
    tap((action: any) => this.route.navigate(['/boards', action.board.id]))
  ), { dispatch: false });

  addColumn$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.addColumn),
    switchMap((action: any) => this.boardService.addColumn(action.payload).pipe(
      map((column: Column | any) => BoardActions.addColumnSuccess(column)),
      catchError(err => of(BoardActions.addColumnFailure(err)))
    ))
  ));

  deleteColumn$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.deleteColumn),
    switchMap((action: any) => this.boardService.deleteColumn(action.columnId).pipe(
      map((column: any) => BoardActions.deleteColumnSuccess(column))
    ))
  ));

  updateColumn$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.updateColumn),
    switchMap((action: any) => this.boardService.updateColumn(action.payload).pipe(
      map((column: any) => BoardActions.updateColumnSuccess(column))
    ))
  ));

  addCard$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.addCard),
    switchMap((action: any) => this.boardService.addCard(action.payload).pipe(
      map((card: any) => BoardActions.addCardSuccess(card)),
      catchError(err => of(BoardActions.addCardFailure(err)))
    ))
  ));

  deleteCard$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.deleteCard),
    switchMap((action: any) => this.boardService.deleteCard(action.cardId).pipe(
      map((card: any) => BoardActions.deleteCardSuccess(card))
    ))
  ));

  updateCard$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.updateCard),
    switchMap((action: any) => this.boardService.updateCard(action.payload).pipe(
      map((card: any) => BoardActions.updateCardSuccess(card))
    ))
  ));

  assignUser$ = createEffect(() => this.actions$.pipe(
    ofType(BoardActions.assignUser),
    switchMap((action: any) => this.boardService.assignUser(action.payload).pipe(
      map((card: any) => BoardActions.assignUserSuccess(card))
    ))
  ));

}
