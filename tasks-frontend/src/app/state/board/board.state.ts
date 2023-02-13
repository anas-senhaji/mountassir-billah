// Board state and initial state including columns and their cards

import { Board } from "src/app/board/board";
import { User } from "src/app/user/user";

export const boardFeatureKey = 'board';

export interface BoardState {
  name: string;
  board: Board;
  users: User[];
}

export const initialBoardState: BoardState = {
  name: '',
  board: {} as Board,
  users: []
};
