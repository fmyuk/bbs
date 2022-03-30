import React, { ChangeEvent, useCallback } from "react";
import { Board, BoardProps } from "../../atoms/Board/Board";
import BoardNameField from "../../molecules/BoardNameField/BoardNameField";

export type BoardListProps = {
  boardList: BoardProps[],
  keyword: string;
  onChangeKeyword: (keyword: string) => void;
  onClickSearch: () => void;
};

export const BoardList = ({
  boardList,
  keyword,
  onChangeKeyword,
  onClickSearch
}: BoardListProps) => {

  return (
    <>
      <BoardNameField keyword={keyword} onChangeKeyword={onChangeKeyword} onClickSearch={onClickSearch} />
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