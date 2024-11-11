import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SingUp = () => {
  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const checkboxHandler = (gender) => setUser({ ...user, gender });
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/user/register`,
        user,
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response?.data || error.message);
    }
    setUser({
      fullName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 shadow-lg p-4">
        <h1 className="text-3xl font-bold text-center">SingUp</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label className="lanel p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              type="text"
              className="input input-bordered w-full max-w-xs"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="lanel p-2">
              <span className="text-base label-text">User Name</span>
            </label>
            <input
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              type="text"
              className="input input-bordered w-full max-w-xs"
              placeholder="User Name"
            />
          </div>
          <div>
            <label className="lanel p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              className="input input-bordered w-full max-w-xs"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="lanel p-2">
              <span className="text-base label-text">Conform Password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              type="password"
              className="input input-bordered w-full max-w-xs"
              placeholder="Conform Password"
            />
          </div>
          <div className="flex py-4">
            <div className=" flex items-center">
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => checkboxHandler("male")}
                defaultChecked
                className="checkbox mx-2"
              />
            </div>
            <div className=" flex items-center">
              <p>Female</p>
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => checkboxHandler("female")}
                defaultChecked
                className="checkbox mx-2"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mb-3 border border-slate-700"
            >
              SingUp
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
