import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/user/login`,
        user,
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      navigate("/");
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response?.data || error.message);
    }
    setUser({
      userName: "",
      password: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 shadow-lg p-4">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label className="lanel p-2">
              <span className="text-base label-text">User Name</span>
            </label>
            <input
              type="text"
              onChange={(e) => {
                setUser({ ...user, userName: e.target.value });
              }}
              className="input input-bordered w-full max-w-xs"
              placeholder="User Name"
            />
          </div>
          <div>
            <label className="lanel p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              className="input input-bordered w-full max-w-xs"
              placeholder="Password"
            />
          </div>

          <div className="mt-5">
            <button className="p-2 btn btn-block btn-sm mb-3 border border-slate-700">
              Login{" "}
            </button>
          </div>
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline">
              SingUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
