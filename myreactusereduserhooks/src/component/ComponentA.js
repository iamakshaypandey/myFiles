// globle state management using usereduser and usecontext

import React, { useContext }  from 'react'
import { CountContext } from '../App'


function ComponentA() {
    const countContext = useContext(CountContext)
  return (
    <div>ComponentA
       <button onClick={()=>countContext.countdispatch('increment')}>increment</button> 
       <button onClick={()=>countContext.countdispatch('decrement')}>Decrement</button> 
       <button onClick={()=>countContext.countdispatch('reset')}>Reset</button> 
    </div>
  )
}

export default ComponentA