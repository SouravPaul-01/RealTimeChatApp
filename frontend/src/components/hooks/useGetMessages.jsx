import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(
          `http://localhost:4000/api/v1/message/${selectedUser?._id}`
        );

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, []);
};

export default useGetMessages;
