import React, { useEffect, useState } from "react";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("API_ENDPOINT/notes", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setNotes(data.notes);
    };

    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`API_ENDPOINT/notes/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className="border p-2 mb-2 flex justify-between">
            <span>{note.title}</span>
            <button
              className="bg-red-500 text-white p-1"
              onClick={() => handleDelete(note.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
