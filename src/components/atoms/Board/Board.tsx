import React, { ChangeEvent, useCallback } from "react";
import { CHAT_PATH, SLASH, WEB_BASE_PATH } from "../../../constants/common-constants";
import { BoardListActions } from "../../molecules/BoardNameField/BoardNameField";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

export type BoardProps = {
  id: string;
  title: string;
  editTitle: string;
  isEdit: boolean;
  actions: BoardListActions;
};

export const Board = ({ id, title, editTitle, isEdit, actions }: BoardProps) => {
  const handleInputText = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    actions.onChangeTitle(e.target.value);
  }, []);

  const handleClickEditButton = useCallback(() => {
    actions.onClickEditButton(id);
  }, []);

  const handleClickEdit = useCallback(() => {
    actions.onClickEdit(id);
  }, []);

  const handleClickDelete = useCallback(() => {
    actions.onClickDelete(id);
  }, []);
  
  return (
    <div>
      {isEdit ? (
        <p>
          <a href={WEB_BASE_PATH + CHAT_PATH + id + SLASH + title}>{title}</a>
          <Button label={"EDIT"} onClick={handleClickEditButton} />
          <Button label={"DELETE"} onClick={handleClickDelete} />
        </p>
      ) : (
        <p>
          <TextInput
            onChange={handleInputText}
            value={editTitle}
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