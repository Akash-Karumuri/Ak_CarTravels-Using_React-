import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CustomerDetails = () => {
    const [users,setUser]=useState([])
    const [fname,setfName]=useState("")
    const [lname,setlName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [id,setId]=useState("")
    // reading data
    useEffect(() => {
        axios.get(`http://localhost:4000/CustomerData`)
        .then((res)=>setUser(res.data))
        .catch((err)=>console.log(err))
    } )

    // deleting user
    const deleteUser = (id) => {
        axios.delete(`http://localhost:4000/CustomerData/${id}`)
            .then(() => {alert("user deleted")
            })
            .catch((err) => console.log(err));
    };
    // Getting one record of Service
    const getOneRecord =(id)=>{
        axios.get(`http://localhost:4000/CustomerData/${id}`)
        .then((res)=>{
            setfName(res.data.fname);
            setlName(res.data.lname);
            setEmail(res.data.email);
            setPhone(res.data.phone);
            setId(res.data.id);
        })
        .catch((err)=> console.log(err))
    }
    // Updating Service
    const updateUserData=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/CustomerData/${id}`,{id,fname,lname,email,phone})
        .then((res)=>alert("Details Updated"))
        .catch((err)=> console.log(err))
    }
    
  return (
    <div className='container p-5'>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>{
                    return(
                        <tr key={index}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button onClick={() => getOneRecord(user.id)} data-bs-toggle="modal" data-bs-target="#updateCustomerData" className='btn btn-primary me-3'>Edit</button>
                                <button onClick={() => deleteUser(user.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                        
                    )
                })}
            </tbody>
        </table>
        <div
            className="modal fade"
            id="updateCustomerData"
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
                            Update Customer Data
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={updateUserData}>
                        <label>First Name:</label>
                        <input onChange={(e)=>setfName(e.target.value)} type="text" id="fname" name="fname" value={fname} placeholder="Enter your first name" className='from-control' required></input>
                        <label>Last Name: <span className='text-danger'>*</span></label>
                        <input onChange={(e)=>setlName(e.target.value)} type="text" id="lname" name="lname" value={lname} placeholder="Enter your last name" className='from-control' required></input>
                        <label>Email: <span className='text-danger'>*</span></label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" value={email} placeholder="Enter your email" className='from-control' required></input>
                        <label>Phone Number: <span className='text-danger'>*</span></label>
                        <input onChange={(e)=>setPhone(e.target.value)} type="tel" id="phone" name="phone" value={phone} placeholder="Enter your phone number" className='from-control' required></input>
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

export default CustomerDetails