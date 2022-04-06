import { ChatResponse } from "./types";

export const actionTypes = {
  CHANGE_COMMENT: "CHANGE_COMMENT",
  ADD_CHAT: "ADD_CHAT"
} as const;

export const actionCreators = {
  changeComment: (comment: string) => ({
    type: actionTypes.CHANGE_COMMENT,
    comment
  }),
  receiveAddChat: (response: ChatResponse) => ({
    type: actionTypes.ADD_CHAT,
    response
  })
};