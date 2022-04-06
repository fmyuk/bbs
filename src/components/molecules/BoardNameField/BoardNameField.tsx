import React, { ChangeEvent, useCallback } from "react";
import Button from "../../atoms/Button/Button";
import TextInput from "../../atoms/TextInput/TextInput";

type Props = {
  title: string;
  onChangeTitle: (title: string) => void;
  onClickAdd: () => void;
};

const BoardNameField = ({ title, onChangeTitle, onClickAdd }: Props) => {
  const handleInputText = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangeTitle(e.target.value);
  }, []);

  const handleClickAdd = useCallback(() => {
    onClickAdd();
  }, []);

  return (
    <div>
      <TextInput
        onChange={handleInputText}
        value={title}
        type={"text"}
      />
      <Button
        label={"ADD"}
        onClick={handleClickAdd}
      />
    </div>
  );
};

export default BoardNameField;