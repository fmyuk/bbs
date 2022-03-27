import { ChatListState } from "./types";

export const initialState: ChatListState = {
  title: "",
  chatList: []
};

export const chatListReducer = (
  state: ChatListState = initialState
) => {
  return state;
};