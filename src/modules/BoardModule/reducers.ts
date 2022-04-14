import { Reducer } from "redux";
import { actionTypes } from "./actions";
import { BoardAction, BoardListState } from "./types";

export const initialState: BoardListState = {
  boardList: [],
  title: ""
};

export const boardListReducer: Reducer<BoardListState, any> = (
  state: BoardListState = initialState,
  action: BoardAction
) => {
  switch (action.type) {
    case actionTypes.RECEIVE_BOARD:
      return {
        ...state,
        boardList: action.response
      }
    case actionTypes.CHANGE_TITLE:
      return {
        ...state,
        title: action.title
      };
    case actionTypes.SAVE_BOARD:
      state.boardList.push(action.response);
      return state;
    case actionTypes.EDIT_TEXT:
      const index = state.boardList.findIndex(({ id }) => id === action.id);
      state.boardList.splice(index, 1, {...state.boardList[index], isEdit: true});
      return state;
    default:
      return state;
  }
};