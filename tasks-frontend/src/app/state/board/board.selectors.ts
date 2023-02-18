import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BoardState } from './board.state';

export const selectBoardState = createFeatureSelector<BoardState>('board');

export const selectBoards = createSelector(
  selectBoardState,
  (state: BoardState) => state.boards
);

export const selectPagination = createSelector(
  selectBoardState,
  (state: BoardState) => state.pagination
);

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
  (state: BoardState) => state.board.name
);

export const selectBoardColumns = createSelector(
  selectBoardState,
  (state: BoardState) => state.board.columns
);

export const selectBoardCards = createSelector(
  selectBoardState,
  (state: BoardState) => state.board.columns!.map((column) => column.cards)
);

