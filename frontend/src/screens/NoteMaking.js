import axios from "axios";
import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const NoteMaking = () => {
  const { user } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (title !== "" && description !== "") {
        const newNote = {
          owner: user,
          title,
          description,
        };
        const response = await axios.post(
          "http://127.0.0.1:8000/api/create/",
          newNote
        );
        console.log(response.data);
        setTitle("");
        setDescription("");
        navigate("/notes");
      }
    } catch (error) {}
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-96">
          <label className="block mb-2">Title:</label>
          <input
            className="w-full border rounded py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
          <label className="block mb-2">Description:</label>
          <textarea
            className="w-full border rounded py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
            value={description}
            onChange={handleDescriptionChange}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default NoteMaking;
