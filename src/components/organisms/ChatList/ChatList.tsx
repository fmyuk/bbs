import React from "react";
import { Chat } from "../../atoms/Chat/Chat";
import CommentField, { ChatListActions } from "../../molecules/CommentFIeld/CommentFIeld";

export type ChatListProps = {
  title: string;
  board: string;
  comment: string;
  chatList: ChatProps[];
  actions: ChatListActions;
};

export type ChatProps = {
  id: string;
  comment: string;
  isEdit: boolean;
};

export const ChatList = ({ title, board, comment, chatList, actions }: ChatListProps) => {
  return (
    <div>
      <h1>props.title</h1>
      {chatList ? (
        chatList.map(chat => {
          <Chat id={chat.id} comment={chat.comment} editComment={comment} isEdit={chat.isEdit} actions={actions} />
        })
      ) : (
        <div>コメントはありません</div>
      )}
      <CommentField comment={comment} board={board} title={title} actions={actions} />
    </div>
  );
};