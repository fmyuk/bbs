import React from "react";
import { CHAT_PATH, SLASH, WEB_BASE_PATH } from "../../../constants/common-constants";

export type BoardProps = {
  id: string;
  title: string;
};

export const Board = ({ id, title }: BoardProps) => {
  return (
    <div>
      <a href={WEB_BASE_PATH + CHAT_PATH + id + SLASH + title}>{title}</a>
    </div>
  );
};