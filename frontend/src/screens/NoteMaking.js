import axios from "axios";
import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseBackendUrl, handleToast } from "../utils/helpers";
const NoteMaking = () => {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // To Update Title
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  //To Update Decription
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // To Handle Home Page Navigate
  const handleNavigate = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  // To Handle Creating Note
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (title && description && user) {
        const newNote = {
          owner: user,
          title,
          description,
        };
        await axios.post(`${baseBackendUrl}create/`, newNote);
        setTitle("");
        setDescription("");
        navigate("/notes");
      } else {
        if (!user) {
          await handleToast("Login Required");
          handleNavigate();
        } else {
          handleToast("Blank Notes Not Allowed");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-screen  ">
        <div className=" w-7/12 px-6  py-6 rounded-md ">
          <h1 className="text-center text-3xl font-semibold px-4 text-gray-700 py-10">
            New Note
          </h1>
          <label className="block mb-2 text-xl font-medium text-gray-800">
            Title:
          </label>
          <input
            className="w-full border rounded py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
            type="text"
            value={title}
            required
            onChange={handleTitleChange}
          />
          <label className="block mb-2  text-xl font-medium text-gray-800">
            Description:
          </label>
          <textarea
            className="w-full border rounded py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
            value={description}
            required
            onChange={handleDescriptionChange}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-44"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default NoteMaking;
