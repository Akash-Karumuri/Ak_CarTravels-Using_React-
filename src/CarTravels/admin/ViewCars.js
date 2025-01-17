import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCars = () => {
    const [car,setCar]=useState([])
    const [name,setName]=useState("")
    const [type,setType]=useState("")
    const [imageUrl, setImageUrl] = useState('');
    const [seatingCapacity,setSeatingCapacity]=useState("")
    const [features,setFeatures]=useState("")
    const [pricePerDay,setPricePerPrice]=useState("")
    const [id,setId]=useState("")

    // Reading data
     useEffect(()=>{
      axios.get(`http://localhost:4000/Cars`)
      .then((res)=>setCar(res.data))
      .catch((err)=>console.log(err))
     }) 

    //  Deleting a car
     const deleteCar = (id) => {
        axios.delete(`http://localhost:4000/Cars/${id}`)
            .then(() => {alert("Car deleted")
            })
            .catch((err) => console.log(err));
    };

    // Getting one record of Car
    const getOneRecord =(id)=>{
        axios.get(`http://localhost:4000/Cars/${id}`)
        .then((res)=>{
            setName(res.data.name)
            setType(res.data.type)
            setImageUrl(res.data.image);
            setSeatingCapacity(res.data.seatingCapacity)
            setFeatures(res.data.features)
            setPricePerPrice(res.data.pricePerDay)
            setId(res.data.id)
        })
        .catch((err)=> console.log(err))
    }

    // Updating Car
    const updateCar=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/Cars/${id}`,{id,name,type,imageUrl,seatingCapacity,features,pricePerDay})
        .then(() => {
            alert('Car Updated');
            setName('');
            setType('');
            setImageUrl('');
            setSeatingCapacity('');
            setFeatures('');
            setPricePerPrice('');
        })
        .catch((err)=> console.log(err))
    }
  return (
    <div className='container p-5 view-cars-page'>
        <h2 className='text-center mb-5'>Available Cars</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Image</th>
                    <th>Seating Capacity</th>
                    <th>Features</th>
                    <th>Price Per Day</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {car.map((car,index)=>{
                return(<tr key={index}>
                    <td>{car.name}</td>
                    <td>{car.type}</td>
                    <td><img src={car.imageUrl} alt={car.name} style={{ width: '100px', height: '70px', objectFit: 'cover' }} /></td>
                    <td>{car.seatingCapacity}</td>
                    <td>{car.features.toString()}</td>
                    <td>{car.pricePerDay} ₹</td>
                    <td>
                        <button onClick={() => getOneRecord(car.id)} data-bs-toggle="modal" data-bs-target="#update1" className='btn btn-primary me-3 mb-2'>Edit</button>
                        <button onClick={() => deleteCar(car.id)} className='btn btn-danger mb-2'>Delete</button>
                    </td>
                </tr>)})}
            </tbody>
        </table>
        <div
            className="modal fade"
            id="update1"
            tabindex="-1"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            
            role="dialog"
            aria-labelledby="modalTitleId"
            aria-hidden="true"
        >
            <div
                className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md"
                role="document"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalTitleId">
                            Update Car
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={updateCar}>
                          <label>Car Name:</label>
                          <input onChange={(e)=>setName(e.target.value)} type="text" id="name" name="name" placeholder="Enter Car name" value={name} className='from-control' required></input>
                          <label>Car Type:</label>
                          <input onChange={(e)=>setType(e.target.value)} type="text" id="type" name="type" placeholder="Enter Car Type" value={type} className='from-control' required></input>
                          <label>Image URL:</label>
                          <input onChange={(e) => setImageUrl(e.target.value)} type="text" id="image" name="image" placeholder="Enter Image URL" value={imageUrl} className='form-control' required />
                          <label>Seating Capacity:</label>
                          <input onChange={(e)=>setSeatingCapacity(e.target.value)} type="number" id="seatingCapacity" name="seatingCapacity" placeholder="Enter Seating Capacity" value={seatingCapacity} className='from-control' required></input>
                          <label>Car Features:</label>
                          <input onChange={(e)=>setFeatures(e.target.value)} type="text" id="features" name="features" placeholder="Enter Car Features" value={features} className='from-control' required></input>
                          <label>Price per Day:</label>
                          <input onChange={(e)=>setPricePerPrice(e.target.value)} type="number" id="pricePerDay" name="pricePerDay" placeholder="Enter price per day" value={pricePerDay} className='from-control' required></input>
                          <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewCars