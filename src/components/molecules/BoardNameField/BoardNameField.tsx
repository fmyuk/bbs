import React, { ChangeEvent, useCallback } from "react";
import Button from "../../atoms/Button/Button";
import TextInput from "../../atoms/TextInput/TextInput";

type Props = {
  title: string;
  actions: BoardListActions;
};

export type BoardListActions = {
  onChangeTitle: (title: string) => void;
  onClickAdd: () => void;
  onClickEditButton: (id: string) => void;
  onClickEdit: (id: string) => void;
  onClickDelete: (id: string) => void;
};

const BoardNameField = ({ title, actions }: Props) => {
  const handleInputText = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    actions.onChangeTitle(e.target.value);
  }, []);

  const handleClickAdd = useCallback(() => {
    actions.onClickAdd();
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