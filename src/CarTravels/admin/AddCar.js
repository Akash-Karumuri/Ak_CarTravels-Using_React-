import axios from 'axios'
import React, { useState } from 'react'

const AddCar = () => {
   const [name,setName]=useState("")
   const [type,setType]=useState("")
   const [seatingCapacity,setSeatingCapacity]=useState("")
   const [features,setFeatures]=useState("")
   const [pricePerDay,setPricePerPrice]=useState("")
   const AddNewCar=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:4000/Cars` ,{name,type,seatingCapacity,features,pricePerDay})
    .then((res)=>alert("Car Added Successfully"))
    .catch((err)=>console.log(err))
   }
  return (
    <div className='container col-lg-6 mx-auto shadow p-5 m-5'>
      <h2 className='text-center'>Add New Car</h2>
      <form onSubmit={AddNewCar}>
        <label>Car Name:</label>
        <input onChange={(e)=>setName(e.target.value)} type="text" id="name" name="name" placeholder="Enter Car name" className='from-control' required></input>
        <label>Car Type:</label>
        <input onChange={(e)=>setType(e.target.value)} type="text" id="type" name="type" placeholder="Enter Car Type" className='from-control' required></input>
        <label>Seating Capacity:</label>
        <input onChange={(e)=>setSeatingCapacity(e.target.value)} type="number" id="seatingCapacity" name="seatingCapacity" placeholder="Enter Seating Capacity" className='from-control' required></input>
        <label>Car Features:</label>
        <input onChange={(e)=>setFeatures(e.target.value)} type="text" id="features" name="features" placeholder="Enter Car Features" className='from-control' required></input>
        <label>Price per Day:</label>
        <input onChange={(e)=>setPricePerPrice(e.target.value)} type="number" id="pricePerDay" name="pricePerDay" placeholder="Enter price per day" className='from-control' required></input>  
        <button type="submit">Submit</button>       
      </form>
    </div>
  )
}

export default AddCar