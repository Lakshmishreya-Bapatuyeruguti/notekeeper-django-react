import React, { useEffect, useContext } from "react";
import NoteCard from "../components/NoteCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";
import Navbar from "../components/Navbar";
import { baseBackendUrl } from "../utils/helpers";
const lists = [
  { title: "abc", description: "abachhefjlregitjgh" },
  { title: "abc", description: "abachhefjlregitjgh" },
  { title: "abc", description: "abachhefjlregitjgh" },
];
console.log(lists);

function NotesList() {
  const { notes, setNotes, user } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`${baseBackendUrl}?owner=${user}`);
        const data = response.data;
        console.log(data);
        if (data.length !== 0) {
          setNotes(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotes();
  }, [setNotes, user]);
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col m-auto w-full ">
        <button
          className="bg-blue-900 text-white text-lg p-2 w-full max-w-2xl mx-auto"
          onClick={() => {
            navigate("/notemaking");
          }}
        >
          Add Note +
        </button>
        {notes &&
          (notes.filter((note) => note.owner === user).length === 0 ? (
            <h1 className="text-center text-xl text-gray-600 font-light py-4">
              No Notes Found!
            </h1>
          ) : (
            notes.map((note) => (
              <div key={note.id} className="m-4 px-24">
                <NoteCard details={note} handler={handleDelete} />
              </div>
            ))
          ))}
      </div>
    </>
  );
}

export default NotesList;
