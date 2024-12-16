import React, { useState } from "react";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  // Add a new note
  const handleAddNote = () => {
    if (!noteTitle || !noteContent) return alert("Title and content are required!");
    const newNote = {
      id: Date.now(),
      title: noteTitle,
      content: noteContent,
    };
    setNotes([...notes, newNote]);
    setNoteTitle("");
    setNoteContent("");
  };

  // Delete a note
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-700">Notes Dashboard</h1>
        </div>

        {/* Add Note Form */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Note</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Note Title"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <textarea
              placeholder="Note Content"
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              rows="4"
            ></textarea>
            <button
              onClick={handleAddNote}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Add Note
            </button>
          </div>
        </div>

        {/* Notes List */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Notes</h2>
          {notes.length === 0 ? (
            <p className="text-gray-500">No notes available. Start adding some!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="p-4 border rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
                  <p className="text-gray-600 mt-2">{note.content}</p>
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
