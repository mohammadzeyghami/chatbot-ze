import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { InputPrimary } from "../../..";
import { IconSend } from "../../../../assets/Icons/send";
import { IconClose } from "../../../../assets/Icons/close";
import { IconMessage } from "../../../../assets";

export interface IChatBot {
  rootClassname?: string;
  ShowButtonClassName?: string;
  ChatbotRootClassName?: string;
  status?: "send" | "received";
}
interface IMessage {
  message: string;
  status: "send" | "received";
}
const ChatbotView = ({
  ChatbotRootClassName,
  ShowButtonClassName,
  status = "send",
}: IChatBot) => {
  const [openModal, setOpenModal] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const MessageInputHandler = (e: any) => {
    setCurrentMessage(e.target.value);
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      // Call your function here, for example:
      setMessages((prev) => [
        ...prev,
        {
          status: status,
          message: currentMessage,
        },
      ]);
      setCurrentMessage("");
    }
  };

  const MessageInputsubmit = () => {
    setMessages((prev) => [
      ...prev,
      {
        status: status,
        message: currentMessage,
      },
    ]);
    setCurrentMessage("");
  };

  return (
    <>
      {/* chatbox */}
      {openModal ? (
        <div
          className={twMerge(
            "fixed bottom-4 right-4 border-2 px-2 pb-0 w-[250px] h-[250px] no-scrollbars flex flex-col rounded-lg   items-center justify-center ",

            ChatbotRootClassName
          )}
        >
          <div
            className="absolute top-0 right-0 text-[20px] cursor-pointer z-30"
            onClick={() => setOpenModal(false)}
          >
            <IconClose width={32} height={32} fill="#000" />
          </div>
          <div className="h-[210px] pt-9 relative w-full overflow-y-auto overflow-x-hidden px-[12px]">
            {messages.map((item) => (
              <div
                className={twMerge(
                  item.status === "send"
                    ? " !ml-auto text-right bg-green-400"
                    : "!mr-auto text-left bg-blue-400",
                  " relative rounded-lg my-1 py-1 flex flex-wrap !text-left  flex-col  !max-w-[70%] !w-fit p px-2"
                )}
              >
                {item.status === "send" ? (
                  <div className="absolute w-[8px] h-[8px] items-center rotate-45 right-0 bg-green-400 bottom-[12px] mr-[-2px]  " />
                ) : (
                  // Button
                  <div className="absolute w-[8px] h-[8px] items-center rotate-45 left-0 bg-blue-400 bottom-[12px] ml-[-2px]  " />
                )}
                <div className=" !text-wrap w-full overflow-hidden  max-h-full h-full">
                  {item.message}
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <InputPrimary
              className=" h-[32px] pr-[20px]"
              value={currentMessage}
              onChange={MessageInputHandler}
              onKeyDown={handleKeyDown}
            />
            <IconSend
              onClick={MessageInputsubmit}
              width={30}
              height={30}
              className="absolute top-[2px] right-1 w-[16px] bg-inherit !outline-none border-none h-full  ] "
            />
          </div>
        </div>
      ) : (
        <div
          className={twMerge(
            "fixed bottom-4 right-4 bg-slate-600 p-2 w-[50px] h-[50px] !rounded-full flex items-center justify-center cursor-pointer",
            ShowButtonClassName
          )}
          onClick={() => setOpenModal(true)}
        >
          <IconMessage fill="#fff" />
        </div>
      )}
    </>
  );
};

export { ChatbotView };
