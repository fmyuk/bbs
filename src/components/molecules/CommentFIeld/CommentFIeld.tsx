import React, { ChangeEvent, useCallback } from "react";
import Button from "../../atoms/Button/Button";
import TextInput from "../../atoms/TextInput/TextInput";

type Props = {
  comment: string;
  onChangeComment: (comment: string) => void;
  onClickComment: () => void;
};

const CommentField = ({ comment, onChangeComment, onClickComment }: Props) => {
  const handleInputComment = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangeComment(e.target.value);
  }, []);

  const handleOnClickComment = useCallback(() => {
    onClickComment();
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