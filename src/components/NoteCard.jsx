import React from "react";

const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow hover:shadow-md transition duration-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{note.title}</h3>
      <p className="text-gray-600 mb-4">
        {note.content || "No content provided."}
      </p>
      <div className="flex justify-end">
        <button
          onClick={onDelete}
          className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
