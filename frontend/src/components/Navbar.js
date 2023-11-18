import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-lg">
          <span
            className="text-gray-200 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Note Keeper
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <h1
            className="text-gray-200 cursor-pointer"
            onClick={() => navigate("/notes")}
          >
            View Notes
          </h1>
          <h1
            className="text-gray-200 cursor-pointer"
            onClick={() => navigate("/notemaking")}
          >
            Create Notes
          </h1>
          {user && <div className="text-white">{user}</div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
