import React from "react";
import { Board, BoardProps } from "../../atoms/Board/Board";
import BoardNameField, { BoardListActions } from "../../molecules/BoardNameField/BoardNameField";

export type BoardListProps = {
  boardList: BoardProps[],
  title: string;
  actions: BoardListActions;
};

export const BoardList = ({
  boardList,
  title,actions
}: BoardListProps) => {

  return (
    <>
      {boardList ? (
        boardList.map(board => {
          <Board id={board.id} title={board.title} editTitle={title} isEdit={board.isEdit} actions={actions} />
        })
      ) : (
        <div>掲示板はありません</div>
      )}
      <BoardNameField title={title} actions={actions} />
    </>
  );
};