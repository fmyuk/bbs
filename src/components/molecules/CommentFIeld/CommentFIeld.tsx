import React, { ChangeEvent, useCallback } from "react";
import Button from "../../atoms/Button/Button";
import TextInput from "../../atoms/TextInput/TextInput";

type Props = {
  comment: string;
  actions: ChatListActions
};

export type ChatListActions = {
  onChangeComment: (comment: string) => void;
  onClickComment: () => void;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
};

const CommentField = ({ comment, actions }: Props) => {
  const handleInputComment = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    actions.onChangeComment(e.target.value);
  }, []);

  const handleOnClickComment = useCallback(() => {
    actions.onClickComment();
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