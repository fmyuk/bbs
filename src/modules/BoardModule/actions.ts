import { BoardState } from "./types";

export const actionTypes = {
  CHANGE_TITLE: "CHANGE_TITLE",
  SAVE_BOARD: "SAVE_BOARD"
} as const;

export const actionCreators = {
  changeTitle: (title: string) => ({
    type: actionTypes.CHANGE_TITLE,
    title
  }),
  receiveSaveBoard: (response: BoardState) => ({
    type: actionTypes.SAVE_BOARD,
    response
  })
};