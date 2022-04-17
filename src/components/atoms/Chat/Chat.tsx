import React, { ChangeEvent, useCallback } from "react";
import { ChatListActions } from "../../molecules/CommentFIeld/CommentFIeld";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

export type ChatProps = {
  id: string;
  comment: string;
  editComment: string;
  isEdit: boolean;
  actions: ChatListActions;
};

export const Chat = ({ id, comment, editComment, isEdit, actions }: ChatProps) => {

  const handleInputComment = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    actions.onChangeComment(e.target.value);
  }, []);

  const handleClickEditButton = useCallback(() => {
    actions.onClickEditButton(id);
  }, []);

  const handleClickEdit = useCallback(() => {
    actions.onClickEdit(id);
  }, []);

  const handleClickDelete = useCallback(() => {
    actions.onClickDelete(id)
  }, []);
  
  return (
    <div>
      {isEdit ?
        (
          <p>
            {comment}
            <Button label={"EDIT"} onClick={handleClickEditButton} />
            <Button label={"DELETE"} onClick={handleClickDelete} />
          </p>
        ) : (
          <p>
            <TextInput
              onChange={handleInputComment}
              value={editComment}
              type={"text"}
            />
            <Button
              label={"EDIT"}
              onClick={handleClickEdit}
            />
          </p>
        )}
    </div>
  );
};