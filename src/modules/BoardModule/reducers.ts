import { BoardListState } from "./types";

const initialState: BoardListState = {
  boardList: []
};

export const boardListReducer = (
  state: BoardListState = initialState
) => {
  return state;
};