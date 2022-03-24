import React from "react";
import { Board, BoardProps } from "../../atoms/Board/Board";

export type BoardListProps = {
  boardList: BoardProps[]
}

export const BoardList = ({
  boardList
}: BoardListProps) => {
  return (
    <>
      {boardList ? (
        boardList.map(board => {
          <Board id={board.id} title={board.title} />
        })
      ) : (
        <div>掲示板はありません</div>
      )}
    </>
  );
};