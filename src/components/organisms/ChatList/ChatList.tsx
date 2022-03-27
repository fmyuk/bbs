import React from "react";
import { Chat, ChatProps } from "../../atoms/Chat/Chat";

export type ChatListProps = {
  title: string;
  chatList: ChatProps[];
};

export const ChatList = ({ chatList }: ChatListProps) => {
  return (
    <div>
      <h1>props.title</h1>
      {chatList ? (
        chatList.map(chat => {
          <Chat comment={chat.comment} />
        })
      ) : (
        <div>コメントはありません</div>
      )}
    </div>
  );
};