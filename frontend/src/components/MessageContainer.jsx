import { useSelector } from "react-redux";
import Messages from "./Messages";
import SendMessage from "./SendMessage";

const MessageContainer = () => {
  const { selectedUser } = useSelector((store) => store.user);
  return (
    <div className="md:min-w-[550px] md:max-w-[550px] flex flex-col">
      <div className="flex items-center gap-2 bg-gray-600 cursor-pointer mb-2 px-4 py-2 text-white">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={selectedUser.profilePhoto} alt="" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>{selectedUser.fullName}</p>
          </div>
        </div>
      </div>
      <Messages />
      <SendMessage />
    </div>
  );
};

export default MessageContainer;
