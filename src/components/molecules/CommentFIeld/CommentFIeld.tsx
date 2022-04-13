import React, { ChangeEvent, useCallback } from "react";
import Button from "../../atoms/Button/Button";
import TextInput from "../../atoms/TextInput/TextInput";

type Props = {
  board: string;
  title: string;
  comment: string;
  actions: ChatListActions
};

export type ChatListActions = {
  onChangeComment: (comment: string) => void;
  onClickComment: (board: string, title: string) => void;
  onClickEditButton: () => void;
  onClickEdit: (id: string, title: string) => void;
  onClickDelete: (id: string) => void;
};

const CommentField = ({ comment, board, title, actions }: Props) => {
  const handleInputComment = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    actions.onChangeComment(e.target.value);
  }, []);

  const handleOnClickComment = useCallback(() => {
    actions.onClickComment(board, title);
  }, []);

  return (
    <div>
      <TextInput
        onChange={handleInputComment}
        value={comment}
        type={"text"}
      />
      <Button
        label={"COMMENT"}
        onClick={handleOnClickComment}
      />
    </div>
  );
};

export default CommentField