import { PickActionType } from "../../utils/actionTypeUtil";
import { actionCreators } from "./actions";

export type ChatListState = {
  title: string;
  comment: string;
  chatList: ChatState[];
};

export type ChatState = {
  id: string;
  comment: string;
};

export type ChatResponse = {
  id: string,
  boardId: string,
  title: string,
  comment: string
};

export type ChatAction = PickActionType<typeof actionCreators>;