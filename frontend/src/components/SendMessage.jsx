import { IoSend } from "react-icons/io5";
const SendMessage = () => {
  return (
    <from className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send message"
          className="border text-sm rounded-lg block w-full p-3 bg-gray-600 text-white"
        />
        <button className=" absolute flex items-center inset-y-0 end-3   ">
          <IoSend />
        </button>
      </div>
    </from>
  );
};

export default SendMessage;
