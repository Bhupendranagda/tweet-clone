import { useState } from "react";

const Login = () => {
  const [login, setIsLogin] = useState(true);
  const loginSignupHandler = () => {
    setIsLogin(!login);
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
          <form action="" className="flex flex-col">
            {!login && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my- font-semibold"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"
                />
              </>
            )}

            <input
              type="text"
              placeholder="Email"
              className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"
            />
            <input
              type="text"
              placeholder="Password"
              className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"
            />
            <button className="bg-[#1D9Bf0] border-none rounded-full py-2 my-4 text-lg text-white">
              Login
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
