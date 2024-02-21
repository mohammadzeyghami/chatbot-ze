import { Chatbot } from ".";

const ChatbotTest = () => {
  return (
    <Chatbot
      position="bottom-left"
      status="received"
      GreetingMessage="this is test message"
      // you can test class names in here
      rootClassname=""
      ShowButtonClassName=""
      ChatbotRootClassName=""
    />
  );
};

export { ChatbotTest };
