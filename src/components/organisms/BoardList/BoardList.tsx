import React from "react";
import { Board } from "../../atoms/Board/Board";

export type BoardListProps = Board[];

export const BoardList = (props: BoardListProps) => {
  return (
    props ? (
      props.map(board => {
        <Board id={board.id} title={board.title} />
      })
    ) : (
      <div>掲示板はありません</div>
    )
  );
};