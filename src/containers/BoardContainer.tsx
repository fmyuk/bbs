import React from "react";
import { useSelector } from "react-redux";
import { BoardProps } from "../components/atoms/Board/Board";
import { BoardList } from "../components/organisms/BoardList/BoardList";
import { getBoardList } from "../modules/BoardModule/selectors";

export const BoardContainer = () => {
  const boardList = useSelector(getBoardList);
  const props = {
    boardList: boardList.boardList as BoardProps[]
  };

  return (
    <>
      <BoardList {...props} />
    </>
  );
};