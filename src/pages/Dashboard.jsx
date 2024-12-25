// import React, { useState, useEffect } from "react";
// import { getNotes, createNote,updateNote, deleteNote } from "../services/noteService";
// import NoteCard from "../components/NoteCard";

// const Dashboard = ({ darkMode, toggleDarkMode }) => {
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [category, setCategory] = useState("development"); // Default category
//   const [filteredCategory, setFilteredCategory] = useState(""); // Category for filtering

//   useEffect(() => {
//     fetchNotes();
//   }, [filteredCategory]); // Re-fetch notes when the filtered category changes

//   // Fetch notes based on filtered category
//   const fetchNotes = async () => {
//     const  data  = await getNotes();
//     console.log(data,"oinoinonoinoinoinono");
//     setNotes(data);
//   };

//   const addNote = async () => {
//     if (!title.trim()) return;
//     await createNote({ title, content, category });
//     setTitle("");
//     setContent("");
//     setCategory("development"); // Reset category to default
//     fetchNotes(); // Re-fetch notes after adding a new one
//   };

//   const handleDelete = async (id) => {
//     await deleteNote(id);
//     fetchNotes(); // Re-fetch notes after deleting
//   };

//   const handleFilterChange = (e) => {
//     setFilteredCategory(e.target.value); // Set the category filter
//   };

//   return (
//     <div className={`min-h-screen py-10 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
//       <div className={`container mx-auto p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
//         <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? "text-white" : "text-gray-800"}`}>
//           My Notes
//         </h2>

//         {/* Filter Section */}
//         <div className="mb-6 flex justify-between items-center">
//           <div>
//             <label className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"} mr-2`}>
//               Filter by Category:
//             </label>
//             <select
//               value={filteredCategory}
//               onChange={handleFilterChange}
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             >
//               <option value="">All Categories</option>
//               <option value="development">Development</option>
//               <option value="production">Production</option>
//               <option value="testing">Testing</option>
//             </select>
//           </div>
//           <button
//             onClick={fetchNotes}
//             className="ml-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
//           >
//             Apply Filter
//           </button>
//         </div>

//         {/* Input Section */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Enter note title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className={`w-full mb-4 px-4 py-2 border ${darkMode ? "border-gray-600" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
//           />
//           <textarea
//             placeholder="Enter note content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             rows="3"
//             className={`w-full px-4 py-2 border ${darkMode ? "border-gray-600" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
//           ></textarea>

//           {/* Category Dropdown */}
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className={`w-full mt-4 px-4 py-2 border ${darkMode ? "border-gray-600" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
//           >
//             <option value="development">Development</option>
//             <option value="production">Production</option>
//             <option value="testing">Testing</option>
//           </select>

//           <button
//             onClick={addNote}
//             className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
//           >
//             Add Note
//           </button>
//         </div>

//         {/* Notes List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* {Array.isArray(notes) && notes.length > 0 ? ( */}
//            {notes.map((note) => (
//               <div>
//               <NoteCard
//                 key={note._id}
//                 note={note}
//                 onDelete={() => handleDelete(note._id)}
//               />
//               {/* {note.title} */}
//               {/* {note.content} */}
//               </div>
//             ))}
//           {/* ) : (
//             <p className={`text-center ${darkMode ? "text-gray-400" : "text-gray-500"} mt-6`}>
//               No notes available. Start adding some!
//             </p>
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState , useEffect} from 'react'
import {getNotes, createNote, deleteNote} from "../services/noteService"

const Dashboard = () => {
  const[note, setNote]= useState([]);
  // const[createNote, setCreateNote]= useState("");
  const [title, setTitle]= useState("");
  const[content, setContent]= useState("");
  const[category, setCategory]= useState("");
  const[cat, setCat]= useState([]);
  

  const fetchData= async()=>{
    const res= await getNotes();
    console.log("ko",res);
    setNote(res);
}
 useEffect(() => {
  
  fetchData();
 }, [])
 
 const handleDelete= async(id)=>{
  console.log("ldo0",id);
   await deleteNote(id);
   fetchData();
 }
 const handleAdd= async()=>{
  
    console.log(title, content, category);
    await createNote({title, content, category});
    fetchData();
 }

 
 
 const filteredProducts = note.filter((n)=>(n.category==cat))

console.log("notccce", note.filter((n)=>(n.category==cat)))
  return (
    <div>
      {["all","a","b","c"].map((data)=>(
        <button className='p-4 bg-black text-white gap-7 mx-4' onClick={()=>setCat(data)}>{data}</button>
      ))}
      {/* { const fill= note.filter(data)=>data.category==} */}
{cat}
      { filteredProducts.length>0 && note.map((data)=>(
        <div className='p-40 '>
          {console.log("datatata",data)}
           <h1>
            <h1>TIdddTLE</h1>
           {data.title}
           </h1>
           <h1>
           <h1>CONTENT</h1>
            {data.content}
           </h1>
           <h1>
           <h1>CATEGORY</h1>
            {data.category}
           </h1>
           <button onClick={()=>handleDelete(data._id)}>delete</button>
        </div>
      ))}
      <h1 className='p-40'>jfhfdfgfj</h1>
     <input type="text" value={title}  onChange={(e)=>setTitle(e.target.value)} className='bg-slate-600 px-20 border-amber-950'/>

{/* {title} */}
<textarea type="text" value={content} onChange={(e)=>setContent(e.target.value)} className='bg-slate-600 px-20 border-amber-950'/>
<select value={category} onChange={(e)=>setCategory(e.target.value)} >
  <option>a</option>
  <option>b</option>
  <option>c</option>
</select>

{category}
<button onClick={()=>handleAdd(title, content, category)} className='p-4 bg-black text-white m-10'>Add</button>
    </div>
  )
}

export default Dashboard