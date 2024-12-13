import React, { useEffect, useState } from 'react'
const StateEx = () => {
    const [name,SetName]=useState("Akash")
    const [count,SetCount]=useState(0)
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    })
  return (
    <div className='container text-center'>
        <h1>Hello {name}</h1>
        <button className='btn btn-primary' onClick={()=>SetName("Sai")}>Update</button>
        <h1>Count:{count}</h1>
        <button className='btn btn-success me-3' onClick={()=>SetCount(count+1)}>Increment</button>
        <button className='btn btn-danger' onClick={()=>SetCount(count-1)}>Decrement</button>

    </div>
    
  )
}

export default StateEx