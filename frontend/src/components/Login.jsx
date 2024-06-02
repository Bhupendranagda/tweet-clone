import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getUser } from "../redux/userSlice";
const Login = () => {
  const [login, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginSignupHandler = () => {
    setIsLogin(!login);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (login) {
      // logic for login
      try {
        const res = await axios.post(
          `${USER_API_ENDPOINT}login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(getUser(res?.data?.user));
        if (res.data.success) {
          navigate("/");
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.success(error.response.data.message);
      }
    } else {
      // logic for signup
      try {
        const res = await axios.post(
          `${USER_API_ENDPOINT}register`,
          {
            name,
            email,
            username,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
          setIsLogin(true);
        }
      } catch (error) {
        toast.success(error.response.data.message);
      }
    }
    console.log("State", name, email, username, password);
  };

  return (
    <div
      id="login-parent"
      className="w-screen h-screen flex items-center justify-center "
    >
      <div id="form-wrap" className="flex items-center w-[80%] justify-evenly">
        <div id="logo">
          <img
            className="ml-5"
            width={"180px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpevfm2P0BtgC9LbXH1n2Xp-oR-iLX8xQTBg&usqp=CAU"
            alt="twitte-logo"
          />
        </div>
        <div id="login-form">
          <div className="my-5">
            <h1 className="font-bold text-5xl">Happening Now...</h1>
          </div>
          <h1 className="mt-4 text-2xl  font-bold">
            {login ? "Login" : "Register"}
          </h1>
          <form action="" onSubmit={submitHandler} className="flex flex-col">
            {!login && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my- font-semibold"
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"
            />
            <button className="bg-[#1D9Bf0] border-none rounded-full py-2 my-4 text-lg text-white">
              {login ? " Login" : " Register"}
            </button>
            <h1>
              {login ? "Don't have an Account?" : "Already Have a Account?"}
              <span
                onClick={loginSignupHandler}
                className="text-blue-500 font-bold cursor-pointer"
              >
                {login ? " Register" : " Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
