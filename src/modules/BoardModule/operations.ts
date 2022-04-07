import { ThunkAction } from "redux-thunk";
import { BASE_PATH } from "../../constants/common-constants";
import { StoreState } from "../../store/store";
import { actionCreators } from "./actions";
import { BoardAction } from "./types";

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
      credentials: 'omit',
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
    
    dispatch(actionCreators.receiveSaveBoard(data));
  } catch (e) {
    console.log("Error");
  }
};