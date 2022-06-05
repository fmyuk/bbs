import { ThunkAction } from "redux-thunk";
import { BASE_PATH, BOARD_PATH } from "../../constants/common-constants";
import { StoreState } from "../../store/store";
import { actionCreators } from "./actions";
import { BoardAction } from "./types";

export const getBoard = (): ThunkAction<
  void,
  StoreState,
  undefined,
  BoardAction
> => async (dispatch, getState) => {
  const state = getState();
  try {
    const data = await fetch(BASE_PATH + BOARD_PATH, {
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
    
    dispatch(actionCreators.receiveBoard(data));
  } catch (e) {
    console.log("Error");
  }
};

export const saveBoard = (): ThunkAction<
  void,
  StoreState,
  undefined,
  BoardAction
> => async (dispatch, getState) => {
  const state = getState();
  try {
    const data = await fetch(BASE_PATH + "board?title=" + state.boardList.title, {
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
    
    dispatch(actionCreators.receiveSaveBoard(data));
  } catch (e) {
    console.log("Error");
  }
};

export const editBoard = (id: string): ThunkAction<
  void,
  StoreState,
  undefined,
  BoardAction
> => async (dispatch, getState) => {
  const state = getState();
  try {
    const data = await fetch(BASE_PATH + BOARD_PATH + id + "?title=" + state.boardList.title, {
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
    
    dispatch(actionCreators.receiveBoard(data));
  } catch (e) {
    console.log("Error");
  }
};

export const deleteBoard = (id: string): ThunkAction<
  void,
  StoreState,
  undefined,
  BoardAction
> => async (dispatch, getState) => {
  const state = getState();
  try {
    const data = await fetch(BASE_PATH + BOARD_PATH + id, {
      method: "delete",
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
    
    dispatch(actionCreators.receiveBoard(data));
  } catch (e) {
    console.log("Error");
  }
};