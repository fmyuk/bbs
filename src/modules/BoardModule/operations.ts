import { ThunkAction } from "redux-thunk";
import { StoreState } from "../../store/store";
import { BoardAction } from "./types";

export const saveBoard = (): ThunkAction<
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