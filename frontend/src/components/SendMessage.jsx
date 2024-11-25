import { useState } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../redux/messageSlice";

const SendMessage = () => {
  const [inputMessage, setInputMessage] = useState("");
  const dispatch = useDispatch();
  const { messages } = useSelector((store) => store.message);
  const { selectedUser } = useSelector((store) => store.user);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/message/send/${selectedUser._id}`,
        { message: inputMessage },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(setMessage([...messages, res.data.newMessage]));
      setInputMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Send message"
          className="border text-sm rounded-lg block w-full p-3 bg-gray-600 text-white"
        />
        <button
          type="submit"
          className="absolute flex items-center inset-y-0 end-3"
        >
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
