import { BoardListState } from "./types";

export const initialState: BoardListState = {
  boardList: []
};

export const boardListReducer = (
  state: BoardListState = initialState
) => {
  return state;
};