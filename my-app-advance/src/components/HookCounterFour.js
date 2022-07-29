// usestate hooks using array

import React, { useState } from 'react'

function HookCounterFour() {
    const [item,setItem] = useState([])
    const AddItem =()=>{
        setItem([...item,{
            id:item.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }

  return (
    <div>
        <button onClick={AddItem}>Add a number</button>
        <ul>
            {
                item.map(item=><li key={item.id}>{item.value}</li>)
            }
        </ul>
    </div>
  )
}

export default HookCounterFour