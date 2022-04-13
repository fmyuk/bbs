import { Reducer } from "redux";
import { actionTypes } from "./actions";
import { ChatAction, ChatListState } from "./types";

export const initialState: ChatListState = {
  board: "",
  title: "",
  comment: "",
  chatList: []
};

export const chatListReducer: Reducer<ChatListState, any> = (
  state: ChatListState = initialState,
  action: ChatAction
) => {
  switch (action.type) {
    case actionTypes.RECEIVE_CHAT:
      return {
        ...state,
        board: action.response[0].board,
        title: action.response[0].title,
        chatList: action.response.map(v => ({
          id: v.id,
          comment: v.comment
        }))
      }
    case actionTypes.CHANGE_COMMENT:
      return {
        ...state,
        comment: action.comment
      }
    case actionTypes.ADD_CHAT:
      const chat = {
        id: action.response.id,
        comment: action.response.comment
      };
      state.chatList.push(chat);
      return state;
    case actionTypes.EDIT_CHAT:
      return state;
    case actionTypes.DELETE_CHAT:
      return state;
    default:
      return state;
  }
};