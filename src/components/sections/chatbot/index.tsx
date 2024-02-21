import { ChatbotView, IChatBot } from "./view";

const Chatbot = ({ ...rest }: IChatBot) => {
  // you can pass get api data in here and pass ass prop to your component here
  return <ChatbotView {...rest} />;
};

export { Chatbot };
