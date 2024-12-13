import axios from 'axios'
import React, { useState } from 'react'

const AddService = () => {
   const [title,setTitle]=useState("")
   const [description,setDescription]=useState("")
   const AddNewService=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:4000/Services` ,{title,description})
    .then((res)=>alert("Service Added Successfully"))
    .catch((err)=>console.log(err))
   }
  return (
    <div className='contaiuner p-5'>
        <h2>Add New Service</h2>
        <form onSubmit={AddNewService}>
        <label>Service Name:</label>
        <input onChange={(e)=>setTitle(e.target.value)} type="text" id="titleName" name="titleName" placeholder="Enter Service name" className='from-control' required></input>
        <label>Service Description:</label>
        <input onChange={(e)=>setDescription(e.target.value)} type="description" id="type" name="description" placeholder="Enter Car Type" className='from-control' required></input>
        <button type="submit">Submit</button>       
      </form>
    </div>
  )
}

export default AddService