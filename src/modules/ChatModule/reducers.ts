import { ChatListState } from "./types";

export const initialState: ChatListState = {
  title: "",
  comment: "",
  chatList: []
};

export const chatListReducer = (
  state: ChatListState = initialState
) => {
  return state;
};