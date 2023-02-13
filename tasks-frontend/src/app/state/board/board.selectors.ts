import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BoardState } from './board.state';

export const selectBoardState = createFeatureSelector<BoardState>('board');

export const selectBoard = createSelector(
  selectBoardState,
  (state: BoardState) => state.board
);

export const selectBoardUsers = createSelector(
  selectBoardState,
  (state: BoardState) => state.users
);

export const selectBoardName = createSelector(
  selectBoardState,
  (state: BoardState) => state.name
);

export const selectBoardColumns = createSelector(
  selectBoardState,
  (state: BoardState) => state.board.columns
);

export const selectBoardCards = createSelector(
  selectBoardState,
  (state: BoardState) => state.board.columns!.map((column) => column.cards)
);

