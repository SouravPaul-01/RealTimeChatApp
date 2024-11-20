import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };
  return (
    <div>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`${
          selectedUser?._id === user?._id ? "bg-zinc-500" : ""
        } flex items-center gap-2 hover:text-zinc-100 hover:bg-zinc-500 cursor-pointer rounded-lg p-2`}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={user?.profilePhoto} alt="" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>{user?.fullName}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
};

export default OtherUser;
