import { BoardState } from "./types";

export const actionTypes = {
  RECEIVE_BOARD: "RECEIVE_BOARD",
  CHANGE_TITLE: "CHANGE_TITLE",
  SAVE_BOARD: "SAVE_BOARD",
  EDIT_BOARD: "EDIT_BOARD",
  DELETE_BOARD: "DELETE_BOARD",
  EDIT_TEXT: "EDIT_TEXT"
} as const;

export const actionCreators = {
  receiveBoard: (response: BoardState[]) => ({
    type: actionTypes.RECEIVE_BOARD,
    response
  }),
  changeTitle: (title: string) => ({
    type: actionTypes.CHANGE_TITLE,
    title
  }),
  receiveSaveBoard: (response: BoardState) => ({
    type: actionTypes.SAVE_BOARD,
    response
  }),
  editText: () => ({
    type: actionTypes.EDIT_TEXT
  })
};