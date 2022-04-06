import { actionTypes } from "./actions";
import { BoardAction, BoardListState } from "./types";

export const initialState: BoardListState = {
  boardList: [],
  title: ""
};

export const boardListReducer = (
  state: BoardListState = initialState,
  action: BoardAction
) => {
  switch (action.type) {
    case actionTypes.CHANGE_TITLE:
      return {
        ...state,
        title: action.title
      };
    case actionTypes.SAVE_BOARD:
      state.boardList.push(action.response);
      return state;
    default:
      return state;
  }
};