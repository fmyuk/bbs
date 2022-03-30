import React, { ChangeEvent, useCallback } from "react";
import flex from "styles/utility/flex.module.scss";
import AddButton from "../../atoms/AddButton/AddButton";
import TextInput from "../../atoms/TextInput/TextInput";

interface Props {
  keyword: string;
  onChangeKeyword: (keyword: string) => void;
  onClickSearch: () => void;
}

const BoardNameField = ({ keyword, onChangeKeyword, onClickSearch }: Props) => {
  const handleInputText = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangeKeyword(e.target.value);
  }, []);

  const handleClickSearch = useCallback(() => {
    onClickSearch();
  }, []);

  return (
    <div className={flex.flex__row_center}>
      <TextInput
        onChange={handleInputText}
        value={keyword}
        type={"text"}
      />
      <AddButton
        label={"ADD"}
        onClick={handleClickSearch}
      />
    </div>
  );
};

export default BoardNameField;