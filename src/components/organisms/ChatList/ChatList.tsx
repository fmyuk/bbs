import React from "react";
import { Chat, ChatProps } from "../../atoms/Chat/Chat";
import CommentField from "../../molecules/CommentFIeld/CommentFIeld";

export type ChatListProps = {
  title: string;
  comment: string;
  chatList: ChatProps[];
  onChangeComment: (comment: string) => void;
  onClickComment: () => void;
};

export const ChatList = ({ comment, chatList, onChangeComment, onClickComment }: ChatListProps) => {
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
      <CommentField comment={comment} onChangeComment={onChangeComment} onClickComment={onClickComment} />
    </div>
  );
};