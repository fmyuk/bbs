import { ChatListState } from "./types";

const initialState: ChatListState = {
  chatList: []
};

export const chatListReducer = (
  state: ChatListState = initialState
) => {
  return state;
};