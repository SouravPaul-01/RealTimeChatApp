import Messages from "./Messages";
import SendMessage from "./SendMessage";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[550px] md:max-w-[550px] flex flex-col">
      <div className="flex items-center gap-2 bg-gray-600 cursor-pointer mb-2 px-4 py-2 text-white">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://avatarfiles.alphacoders.com/239/thumb-1920-239573.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>Name</p>
          </div>
        </div>
      </div>
      <Messages />
      <SendMessage />
    </div>
  );
};

export default MessageContainer;
