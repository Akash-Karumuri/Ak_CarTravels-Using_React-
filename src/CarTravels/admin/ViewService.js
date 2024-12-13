import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewService = () => {
    const [service,setService]=useState([])
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [id,setId]=useState("")
    
    // Reading Data
     useEffect(()=>{
      axios.get(`http://localhost:4000/Services`)
      .then((res)=>setService(res.data))
      .catch((err)=>console.log(err))
     })
     //  Deleting a Service
     const deleteService = (id) => {
        axios.delete(`http://localhost:4000/Services/${id}`)
            .then(() => {alert("Service deleted")
            })
            .catch((err) => console.log(err));
    };

     // Getting one record of Service
     const getOneRecord =(id)=>{
        axios.get(`http://localhost:4000/Services/${id}`)
        .then((res)=>{
            setTitle(res.data.title);
            setDescription(res.data.description);
            setId(res.data.id);
        })
        .catch((err)=> console.log(err))
    }
    // Updating Service
    const updateService=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/Services/${id}`,{id,title,description})
        .then((res)=>alert("Service Updated"))
        .catch((err)=> console.log(err))
    }
  return (
    <div className='container p-5'>
        <h2 className='text-center mb-5'>Available Services</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Service Name</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {service.map((service,index)=>{
                return(<tr key={index}>
                    <td>{service.title}</td>
                    <td>{service.description}</td>
                    <td>
                        <button onClick={() => getOneRecord(service.id)} data-bs-toggle="modal" data-bs-target="#updateService" className='btn btn-primary me-3'>Edit</button>
                        <button onClick={() => deleteService(service.id)}  className='btn btn-danger'>Delete</button>
                    </td>
                </tr>)})}
            </tbody>
        </table>
        <div
            className="modal fade"
            id="updateService"
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
                <div class="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalTitleId">
                            Update Service
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={updateService}>
                          <label>Service Name:</label>
                          <input onChange={(e)=>setTitle(e.target.value)} type="text" id="titleName" name="titleName" placeholder="Enter Service name" value={title} className='from-control' required></input>
                          <label>Service Description</label>
                          <input onChange={(e)=>setDescription(e.target.value)} type="text" id="description" name="description" placeholder="Enter Service Description" value={description} className='from-control' required></input>
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

export default ViewService