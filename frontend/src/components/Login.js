import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateEmail, handleToast } from "../utils/helpers";
const Login = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(AppContext);

  //  To Handle Input Change
  const handleInputChange = (event) => {
    setUser(event.target.value);
  };
  //  To Handle Email Submission
  const handleButtonClick = () => {
    const isValid = validateEmail(user);
    if (isValid) navigate("/notes");
    else handleToast("Invalid Email");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-gray-300 text-4xl font-light font-sans py-2">
          Note Keeper
        </h1>
        <h2 className="text-gray-500 text-md font-light pb-8">
          Your Personal Notes App
        </h2>
        <input
          className="px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-600"
          type="email"
          required
          placeholder="Enter your email"
          value={user}
          onChange={handleInputChange}
        />
        <button
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-0 focus:ring-blue-600 focus:ring-opacity-50"
          onClick={handleButtonClick}
        >
          Get Started
        </button>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
