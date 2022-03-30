import React, { ChangeEvent, FC } from "react";

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  type: string;
};

const TextInput: FC<Props> = React.memo((props) => {
  const { onChange, value, type } = props;

  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
    />
  );
});

export default TextInput;