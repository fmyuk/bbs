import React from "react";
import { useSelector } from "react-redux";
import { ChatProps } from "../components/atoms/Chat/Chat";
import { ChatList } from "../components/organisms/ChatList/ChatList";
import { getChatList } from "../modules/ChatModule/selectors";

export const ChatContainer = () => {
  const chatList = useSelector(getChatList);
  const props = {
    title: chatList.title,
    chatList: chatList.chatList as ChatProps[]
  };
  return <ChatList {...props} />
}