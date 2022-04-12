import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatProps } from "../components/atoms/Chat/Chat";
import { ChatList } from "../components/organisms/ChatList/ChatList";
import { actionCreators } from "../modules/ChatModule/actions";
import { addChat, deleteChat, editChat, getChat } from "../modules/ChatModule/operations";
import { getChatList } from "../modules/ChatModule/selectors";

type Board = {
  id: string;
  title: string;
};

export const ChatContainer = ({ id, title}: Board) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChat(id, title));
  }, []);

  const chatList = useSelector(getChatList);

  const props = {
    board: chatList.board,
    title: chatList.title,
    comment: chatList.comment,
    chatList: chatList.chatList as ChatProps[],
    actions: {
      onChangeComment: (comment: string) => {
        dispatch(actionCreators.changeComment(comment));
      },
      onClickComment: (board: string, title: string) => {
        dispatch(addChat(board, title));
      },
      onClickEdit: (id: string, title: string) => {
        dispatch(editChat(id, title));
      },
      onClickDelete: (id: string) => {
        dispatch(deleteChat(id));
      }
    }
  };
  return <ChatList {...props} />
}