import React, { ChangeEvent, useCallback } from "react";
import AddButton from "../../atoms/AddButton/AddButton";
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

  const handleClickComment = useCallback(() => {
    onClickComment();
  }, []);

  return (
    <div>
      <TextInput
        onChange={handleInputComment}
        value={comment}
        type={"text"}
      />
      <AddButton
        label={"COMMENT"}
        onClick={handleClickComment}
      />
    </div>
  );
};

export default CommentField