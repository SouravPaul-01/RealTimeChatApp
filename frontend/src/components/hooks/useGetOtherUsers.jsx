import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOthrUsers = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(`http://localhost:4000/api/v1/user/`);

        console.log(response);
        // Store the data in the state
        dispatch(setOtherUsers(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOthrUsers();
  }, []);
};

export default useGetOtherUsers;
