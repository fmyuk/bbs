import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ChatProps } from "../components/atoms/Chat/Chat";
import { ChatList } from "../components/organisms/ChatList/ChatList";
import { getChatList } from "../modules/ChatModule/selectors";

export const ChatContainer = () => {
  const navigate = useNavigate();
  const disaptch = useDispatch();
  const chatList = useSelector(getChatList);

  const props = {
    title: chatList.title,
    comment: chatList.comment,
    chatList: chatList.chatList as ChatProps[],
    onChangeComment: (comment: string) => {

    },
    onClickComment: () => {

    }
  };
  return <ChatList {...props} />
}