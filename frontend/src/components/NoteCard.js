import { React, useRef, useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import { baseBackendUrl } from "../utils/helpers";

function NoteCard({ details, handler }) {
  const inputRef = useRef(null);
  const [updatedTitle, setUpdatedTitle] = useState(details.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    details.description
  );
  const [isEditing, setIsEditing] = useState(false);

  // To Handle Update Request
  const handleUpdate = async (id) => {
    try {
      setIsEditing(false);
      await axios.put(`${baseBackendUrl}update/${id}/`, {
        title: updatedTitle,
        description: updatedDescription,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // To Handle Delete Request
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseBackendUrl}delete/${id}/`);
      handler(id);
    } catch (error) {
      console.error(error);
    }
  };

  // To Handle Input Focus while editing
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {isEditing ? (
            <input
              type="text"
              className="border-none focus:outline-none cursor-text h-10 px-2"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              ref={inputRef}
            />
          ) : (
            <h1 className="text-gray-800 font-semibold text-lg">
              {" "}
              {updatedTitle}
            </h1>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {isEditing ? (
            <input
              type="text"
              className="border-none focus:outline-none cursor-text h-10 px-2 w-full"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
              ref={inputRef}
            />
          ) : (
            <h1 className="text-gray-700">{updatedDescription}</h1>
          )}

          <div className=" text-right space-x-3">
            {isEditing ? (
              <span onClick={() => handleUpdate(details.id)}>
                <SaveIcon />
              </span>
            ) : (
              <span onClick={() => setIsEditing(true)}>
                <EditIcon />
              </span>
            )}
            <span onClick={() => handleDelete(details.id)}>
              <DeleteIcon />
            </span>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default NoteCard;
