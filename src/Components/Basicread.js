import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Basicread = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='container p-5'>
        <h1 className='text-center mb-3'>Basic Data Reading</h1>
        <table className='table table-bordered table-striped table-dark m-0'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>{
                    return(
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>
                        
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Basicread