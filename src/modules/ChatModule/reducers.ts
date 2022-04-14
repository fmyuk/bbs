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
          comment: v.comment,
          isEdit: false
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
        comment: action.response.comment,
        isEdit: false
      };
      state.chatList.push(chat);
      return state;
    case actionTypes.EDIT_TEXT:
      const index = state.chatList.findIndex(({ id }) => id === action.id);
      state.chatList.splice(index, 1, {...state.chatList[index], isEdit: true});
      return state;
    default:
      return state;
  }
};