import { useParams } from "react-router";
import { ChatContainer } from "./ChatContainer";

export const ChatContentsContainer = () => {
  const urlParams = useParams<{ id: string }>();

  return <ChatContainer />
};