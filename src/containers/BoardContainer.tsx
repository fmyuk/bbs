import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoardProps } from "../components/atoms/Board/Board";
import { BoardList } from "../components/organisms/BoardList/BoardList";
import { actionCreators } from "../modules/BoardModule/actions";
import { deleteBoard, editBoard, saveBoard } from "../modules/BoardModule/operations";
import { getBoardList } from "../modules/BoardModule/selectors";

export const BoardContainer = () => {
  const dispatch = useDispatch();
  const boardList = useSelector(getBoardList);

  const props = {
    boardList: boardList.boardList as BoardProps[],
    title: boardList.title,
    actions: {
      onChangeTitle: (title: string) => {
        dispatch(actionCreators.changeTitle(title));
      },
      onClickAdd: () => {
        dispatch(saveBoard());
      },
      onClickEdit: (id: string) => {
        dispatch(editBoard(id));
      },
      onClickDelete: (id: string) => {
        dispatch(deleteBoard(id));
      }
    }
  };

  return <BoardList {...props} />;
};