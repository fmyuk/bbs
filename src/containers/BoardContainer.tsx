import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BoardProps } from "../components/atoms/Board/Board";
import { BoardList } from "../components/organisms/BoardList/BoardList";
import { actionCreators } from "../modules/BoardModule/actions";
import { saveBoard } from "../modules/BoardModule/operations";
import { getBoardList } from "../modules/BoardModule/selectors";

export const BoardContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const boardList = useSelector(getBoardList);

  const props = {
    boardList: boardList.boardList as BoardProps[],
    title: boardList.title,
    onChangeTitle: (title: string) => {
      dispatch(actionCreators.changeTitle(title));
    },
    onClickAdd: () => {
      dispatch(saveBoard());
      navigate("/board");
    }
  };

  return <BoardList {...props} />;
};