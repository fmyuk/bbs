import React from "react";
import { Board, BoardProps } from "../../atoms/Board/Board";
import BoardNameField from "../../molecules/BoardNameField/BoardNameField";

export type BoardListProps = {
  boardList: BoardProps[],
  title: string;
  onChangeTitle: (title: string) => void;
  onClickAdd: () => void;
};

export const BoardList = ({
  boardList,
  title,
  onChangeTitle,
  onClickAdd
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
      <BoardNameField title={title} onChangeTitle={onChangeTitle} onClickAdd={onClickAdd} />
    </>
  );
};