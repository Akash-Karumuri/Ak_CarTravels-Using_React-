import React, { useContext } from 'react'
import { userData } from './MainComp';


const Comp2 = () => {
    const [count, setCount] = useContext(userData);
  return (
    <div>Comp2
        <button onClick={() => setCount(count + 1)}>Add</button>
        Count: {count}
    </div>
  )
}

export default Comp2