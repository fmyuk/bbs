import React from "react";
import { Chat, ChatProps } from "../../atoms/Chat/Chat";
import CommentField, { ChatListActions } from "../../molecules/CommentFIeld/CommentFIeld";

export type ChatListProps = {
  title: string;
  comment: string;
  chatList: ChatProps[];
  actions: ChatListActions;
};

export const ChatList = ({ comment, chatList, actions }: ChatListProps) => {
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
      <CommentField comment={comment} actions={actions} />
    </div>
  );
};