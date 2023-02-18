import { Board } from "src/app/board/board";
import { User } from "src/app/user/user";

export const boardFeatureKey = 'board';

export interface BoardState {
  boards: Board[] | any;
  pagination: any;
  board: Board;
  users: User[];
}

export const initialBoardState: BoardState = {
  boards: [],
  pagination: {},
  board: {} as Board,
  users: []
};
