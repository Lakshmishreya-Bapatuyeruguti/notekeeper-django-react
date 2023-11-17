import React, { useEffect, useContext } from "react";
import NoteCard from "../components/NoteCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";
import Navbar from "../components/Navbar";
const lists = [
  { title: "abc", description: "abachhefjlregitjgh" },
  { title: "abc", description: "abachhefjlregitjgh" },
  { title: "abc", description: "abachhefjlregitjgh" },
];
console.log(lists);

function NotesList() {
  const { notes, setNotes } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/");
        const data = response.data;
        console.log(data);
        if (data.length !== 0) {
          setNotes(data);
        }
      } catch (error) {}
    };
    fetchNotes();
  }, [setNotes]);
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col m-auto w-full">
        <button
          className="bg-blue-900 text-white text-lg p-2 w-full max-w-2xl mx-auto"
          onClick={() => {
            navigate("/notemaking");
          }}
        >
          Add Note +
        </button>
        {notes &&
          notes.map((note) => {
            return (
              <div className="m-4 px-24">
                <NoteCard details={note} handler={handleDelete} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default NotesList;
