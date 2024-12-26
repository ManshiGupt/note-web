import React, { useState, useEffect } from 'react'
import { getNotes } from '../services/noteService';

const NotFound = () => {
    const[name, setName]= useState("");
    const[arr, setArr]= useState([]);
    const[filter, setFilter]= useState("");
    const[data, setData]= useState([]);

    // const handleArr=()=>{
    //         setArr([...arr, name]);
    //         setName("");
    //         console.log("dd", name);
    //         console.log("lo",arr);
    // }

    const fetchData= async()=>{
        try {
            const res= await getNotes();
            setData(res);
            console.log("lpo",res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    
   const f= data.filter((d)=>{
    console.log("d",d.category)
    console.log("filter",filter)
    console.log("is", d.category===filter)
           return d.category===filter
   })
   console.log("f",f)
  return (
    <div className='p-40 '>
        {/* <label>{name}</label>
        <input value={name} type='text' onChange={(e)=>setName(e.target.value)} className='bg-slate-500 text-white'/>
        <button onClick={handleArr} className='border-black'>submit</button>
        {arr.map((data, i)=>(
            <div key={i}>
                {console.log("data",data)}
                <li>{data}</li>
             </div>
        ))} */}
        
        {["a","b","c"].map((d, i)=>(
            <div className='flex gap-10' key={i}>
            <button className='bg-slate-500 text-white border-2 p-4 rounded-lg' onClick={()=>setFilter(d)}>
                {d}
                {console.log("po",filter)}
            </button>
            </div>
        ))}

        {f.length>0 && f.map((k, i)=>(
            <div key={i} className='bg-slate-600 text-white'>
                {k.title}
                {console.log("CC",k)}
            </div>
        ))}
    </div>
  )
}

export default NotFound