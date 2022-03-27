import React from "react";

export type BoardProps = {
  id: string;
  title: string;
};

export const Board = ({ id, title }: BoardProps) => {
  return (
    <div>
      <a href={id}>{title}</a>
    </div>
  );
};