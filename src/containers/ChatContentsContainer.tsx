import { useParams } from "react-router";
import { ChatContainer } from "./ChatContainer";

export const ChatContentsContainer = () => {
  const urlParams = useParams<{ id: string, title: string }>();
  const id = urlParams.id ?? "";
  const title = urlParams.title ?? "";

  return <ChatContainer id={id} title={title} />
};