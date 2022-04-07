import { Reducer } from "redux";
import { actionTypes } from "./actions";
import { ChatAction, ChatListState } from "./types";

export const initialState: ChatListState = {
  title: "",
  comment: "",
  chatList: []
};

export const chatListReducer: Reducer<ChatListState, any> = (
  state: ChatListState = initialState,
  action: ChatAction
) => {
  switch (action.type) {
    case actionTypes.CHANGE_COMMENT:
      return {
        ...state,
        comment: action.comment
      }
    case actionTypes.ADD_CHAT:
      state.chatList.push(action.response);
      return state;
    default:
      return state;
  }
};