import { ThunkAction } from "redux-thunk";
import { StoreState } from "../../store/store";
import { BoardAction } from "../BoardModule/types";

export const addChat = (): ThunkAction<
  void,
  StoreState,
  undefined,
  BoardAction
> => async (dispatch, getState) => {
  const state = getState();
  try {
    
  } catch (e) {
    console.log("Error");
  }
};