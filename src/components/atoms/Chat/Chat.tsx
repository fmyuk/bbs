import React from "react";

export type ChatProps = {
  comment: string;
};

export const Chat = ({ comment }: ChatProps) => {
  return (
    <div>
      {comment}
    </div>
  );
};