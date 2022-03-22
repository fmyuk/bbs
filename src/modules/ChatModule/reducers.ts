import { ChatListState } from "./types";

export const initialState: ChatListState = {
  chatList: []
};

export const chatListReducer = (
  state: ChatListState = initialState
) => {
  return state;
};