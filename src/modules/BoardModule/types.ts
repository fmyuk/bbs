import { PickActionType } from "../../utils/actionTypeUtil";
import { actionCreators } from "./actions";

export type BoardListState = {
  boardList: BoardState[];
  title: string;
};

export type BoardState = {
  id: string;
  title: string;
  isEdit: boolean;
};

export type BoardAction = PickActionType<typeof actionCreators>;