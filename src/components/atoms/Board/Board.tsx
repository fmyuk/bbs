import React from "react";

export type BoardProps = {
  id: string;
  title: string;
};

export const Board = ({ id, title }: Board) => {
  return (
    <div>
      <a href={id}>{title}</a>
    </div>
  );
};