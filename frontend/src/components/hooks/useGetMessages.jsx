import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/messageSlice";
const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(
          `http://localhost:4000/api/v1/message/${selectedUser?._id}`
        );
        dispatch(setMessage(response.data));
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [selectedUser]);
};

export default useGetMessages;
