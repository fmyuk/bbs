import { ThunkAction } from "redux-thunk";
import { BASE_PATH } from "../../constants/common-constants";
import { StoreState } from "../../store/store";
import { ChatAction } from "../ChatModule/types";
import { actionCreators } from "./actions";

export const addChat = (): ThunkAction<
  void,
  StoreState,
  undefined,
  ChatAction
> => async (dispatch, getState) => {
  const state = getState();
  try {
    const data = await fetch(
      BASE_PATH + "chat?comment=" + state.chatList.comment, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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

export const editChat = (id: string, title: string): ThunkAction<
  void,
  StoreState,
  undefined,
  ChatAction
> => async (dispatch, getState) => {
  try {
    const data = await fetch(BASE_PATH + "chat/" + id + "?title=" + title, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
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

export const deleteChat = (id: string): ThunkAction<
  void,
  StoreState,
  undefined,
  ChatAction
> => async (dispatch, getState) => {
  try {
    const data = await fetch(BASE_PATH + "chat/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
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