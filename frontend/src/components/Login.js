import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const Login = () => {
  const { setUser, user } = useContext(AppContext);
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setUser(event.target.value);
  };

  const handleButtonClick = () => {
    navigate("/notes");
  };

  return (
    <>
      <div></div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-blue-900 text-3xl font-bold font-sans py-1">
          Note Keeper
        </h1>
        <h2 className="text-gray-600 text-md font-medium pb-3">
          Your personal Notes App
        </h2>
        <input
          className="px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-600"
          type="text"
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
      </div>
    </>
  );
};

export default Login;
