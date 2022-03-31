import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatProps } from "../components/atoms/Chat/Chat";
import { ChatList } from "../components/organisms/ChatList/ChatList";
import { actionCreators } from "../modules/ChatModule/actions";
import { addChat } from "../modules/ChatModule/operations";
import { getChatList } from "../modules/ChatModule/selectors";

export const ChatContainer = () => {
  const dispatch = useDispatch();
  const chatList = useSelector(getChatList);

  const props = {
    title: chatList.title,
    comment: chatList.comment,
    chatList: chatList.chatList as ChatProps[],
    onChangeComment: (comment: string) => {
      dispatch(actionCreators.changeComment(comment));
    },
    onClickComment: () => {
      dispatch(addChat());
    }
  };
  return <ChatList {...props} />
}