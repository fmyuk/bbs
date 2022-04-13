import React, { useCallback } from "react";
import { CHAT_PATH, SLASH, WEB_BASE_PATH } from "../../../constants/common-constants";
import { BoardListActions } from "../../molecules/BoardNameField/BoardNameField";
import Button from "../Button/Button";

export type BoardProps = {
  id: string;
  title: string;
  isEdit: boolean;
  actions: BoardListActions;
};

export const Board = ({ id, title, actions }: BoardProps) => {
  const handleClickDelete = useCallback(() => {
    actions.onClickDelete(id);
  }, []);
  
  return (
    <div>
      <a href={WEB_BASE_PATH + CHAT_PATH + id + SLASH + title}>{title}</a>
      <Button label={"DELETE"} onClick={handleClickDelete} />
    </div>
  );
};