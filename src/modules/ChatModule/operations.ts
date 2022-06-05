import { ThunkAction } from "redux-thunk";
import { BASE_PATH, CHAT_PATH } from "../../constants/common-constants";
import { StoreState } from "../../store/store";
import { ChatAction } from "../ChatModule/types";
import { actionCreators } from "./actions";

export const getChat = (board: string, title: string): ThunkAction<
  void,
  StoreState,
  undefined,
  ChatAction
> => async (dispatch, getState) => {
  try {
    const data = await fetch(
      BASE_PATH + CHAT_PATH + board + "&title=" + title, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "*"
      }
    })
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
    
    dispatch(actionCreators.receiveChat(data));
  } catch (e) {
    console.log("Error");
  }
};

export const addChat = (): ThunkAction<
  void,
  StoreState,
  undefined,
  ChatAction
> => async (dispatch, getState) => {
  const state = getState();
  try {
    const data = await fetch(
      BASE_PATH + "chat?board=" + state.chatList.board + "&title=" + state.chatList.title + "&comment=" + state.chatList.comment, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "*"
      }
    })
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
    
    dispatch(actionCreators.receiveAddChat(data));
  } catch (e) {
    console.log("Error");
  }
};

export const editChat = (id: string): ThunkAction<
  void,
  StoreState,
  undefined,
  ChatAction
> => async (dispatch, getState) => {
  const state = getState();
  try {
    const data = await fetch(BASE_PATH + CHAT_PATH + id + "?board=" + state.chatList.board + "&title=" + state.chatList.title, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "*"
      }
    })
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
    
    dispatch(actionCreators.receiveChat(data));
  } catch (e) {
    console.log("Error");
  }
};

export const deleteChat = (id: string): ThunkAction<
  void,
  StoreState,
  undefined,
  ChatAction
> => async (dispatch, getState) => {
  const state = getState();
  try {
    const data = await fetch(BASE_PATH + CHAT_PATH + id + "?board=" + state.chatList.board, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "*"
      }
    })
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
    
    dispatch(actionCreators.receiveChat(data));
  } catch (e) {
    console.log("Error");
  }
};