import React from "react";
import { Chat } from "../../atoms/Chat/Chat";

export type ChatList = {
  title: string;
  chatList: Chat[];
};

export const ChatList = (props: ChatList) => {
  return (
    <div>
      <h1>props.title</h1>
      {props.chatList ? (
        props.chatList.map(chat => {
          <Chat comment={chat.comment} />
        })
      ) : (
        <div>コメントはありません</div>
      )}
    </div>
  );
};