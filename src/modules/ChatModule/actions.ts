import { ChatResponse } from "./types";

export const actionTypes = {
  RECEIVE_CHAT: "RECEIVE_CHAT",
  CHANGE_COMMENT: "CHANGE_COMMENT",
  ADD_CHAT: "ADD_CHAT",
  EDIT_CHAT: "EDIT_CHAT",
  DELETE_CHAT: "DELETE_CHAT"
} as const;

export const actionCreators = {
  receiveChat: (response: ChatResponse[]) => ({
    type: actionTypes.RECEIVE_CHAT,
    response
  }),
  changeComment: (comment: string) => ({
    type: actionTypes.CHANGE_COMMENT,
    comment
  }),
  receiveAddChat: (response: ChatResponse) => ({
    type: actionTypes.ADD_CHAT,
    response
  }),
  editChat: (response: ChatResponse) => ({
    type: actionTypes.EDIT_CHAT,
    response
  }),
  deleteChat: (id: string) => ({
    type: actionTypes.DELETE_CHAT,
    id
  })
};