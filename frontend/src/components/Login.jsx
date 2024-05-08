import { useState } from "react";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constant";

const Login = () => {
  const [login, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

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
          }
        );
        console.log("RESPONSE", res);
      } catch (error) {
        console.log("ERRROR", error);
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
          }
        );
        console.log("RESPONSE", res);
      } catch (error) {
        console.log("ERRROR", error);
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
            src="https://i.pinimg.com/originals/99/65/5e/99655e9fe24eb0a7ea38de683cedb735.jpg"
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
