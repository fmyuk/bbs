import { combineReducers } from "redux";
import { boardListReducer } from "../modules/BoardModule/reducers";
import { chatListReducer } from "../modules/ChatModule/reducers";

export const store = combineReducers({
  boardList: boardListReducer,
  chatList: chatListReducer
});

export type StoreState = ReturnType<typeof store>;