import React from "react";

export type Chat = {
  comment: string;
};

export const Chat = ({ comment }: Chat) => {
  return (
    <div>
      {comment}
    </div>
  );
};