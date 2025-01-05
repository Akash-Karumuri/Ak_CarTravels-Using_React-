import React, { createContext, useState } from 'react'
import Comp1 from './Comp1'


export const userData= createContext()
const MainComp = () => {
   
    const [count,setCount]=useState(0)
  return (
    <div>MainComp
        <userData.Provider value={[count,setCount]}>
        <button onClick={()=>setCount(count+1)}>Add</button>
        Count:{count}
        <Comp1/>
        </userData.Provider>
    </div>
  )
}

export default MainComp