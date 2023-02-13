// Board reducer

// Path: src\app\state\board\board.reducers.ts
//
// create a reducer function for each action type in
// ./board.actions.ts
//
import { createReducer, on } from "@ngrx/store";
import { Card } from "src/app/board/column/card/card";
import { BoardActions } from "./board.actions";
import { initialBoardState, BoardState } from "./board.state";

export const boardReducer = createReducer(
  initialBoardState,
  on(BoardActions.loadBoard, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(BoardActions.loadBoardSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      board: action.board,
      users: action.board.users ?? [],
      error: '',
    };
  }),
  on(BoardActions.loadBoardFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }),
  on(BoardActions.addColumn, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(BoardActions.addColumnSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      board: {...state.board, columns: [...[state.board.columns], action.payload]},
      error: '',
    };
  }),
  on(BoardActions.addColumnFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }),
  on(BoardActions.deleteColumn, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(BoardActions.deleteColumnSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      board: {...state.board, columns: state.board.columns?.filter(col => col.id !== action.payload.id)},
      error: '',
    };
  }),
  on(BoardActions.updateColumn, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(BoardActions.updateColumnSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      board: {...state.board, columns: state.board.columns?.map(col => col.id === action.payload.id ? action.payload : col)},
      error: '',
    };
  }),
  on(BoardActions.addCard, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(BoardActions.addCardSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      board: {...state.board, columns: state.board.columns?.map(col => col.id === action.payload.columnId ? {...col, cards: [...col.cards!, action.payload]} : col)},
      error: '',
    };
  }),
  on(BoardActions.addCardFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }),
  on(BoardActions.deleteCard, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(BoardActions.deleteCardSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      board: {...state.board, columns: state.board.columns?.map(col => col.id === action.payload.columnId ? {...col, cards: col.cards!.filter((card: Card) => card.id !== action.payload.id)} : col)},
      error: '',
    };
  }),
  on(BoardActions.updateCard, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(BoardActions.updateCardSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      board: {...state.board, columns: state.board.columns?.map(col => col.id === action.payload.columnId ? {...col, cards: col.cards!.map((card: Card) => card.id === action.payload.id ? action.payload : card)} : col)},
      error: '',
    };
  }),
  on(BoardActions.updateCardOrder, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(BoardActions.updateCardOrderSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      board: {...state.board, columns: state.board.columns?.map(col => col.id === action.payload.columnId ? {...col, cards: action.payload.cards} : col)},
      error: '',
    };
  }),
  on(BoardActions.updateCardOrderFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }),
  on(BoardActions.updateColumnOrder, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(BoardActions.updateColumnOrderSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      board: {...state.board, columns: action.payload.columns},
      error: '',
    };
  }),
  on(BoardActions.updateColumnOrderFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }),
);
