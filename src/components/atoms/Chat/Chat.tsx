import React, { useCallback } from "react";
import { ChatListActions } from "../../molecules/CommentFIeld/CommentFIeld";
import Button from "../Button/Button";

export type ChatProps = {
  id: string;
  comment: string;
  board: string;
  isEdit: boolean;
  actions: ChatListActions;
};

export const Chat = ({ id, comment, board, actions }: ChatProps) => {
  const handleClickDelete = useCallback(() => {
    actions.onClickDelete(id)
  }, []);
  
  return (
    <div>
      {comment}
      <Button label={"DELETE"} onClick={handleClickDelete} />
    </div>
  );
};