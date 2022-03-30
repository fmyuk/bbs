import React, { FC } from "react";

interface Props {
  label: string;
  onClick: () => void;
}

const AddButton: FC<Props> = React.memo((props) => {
  const { label, onClick } = props;
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
});

export default AddButton;