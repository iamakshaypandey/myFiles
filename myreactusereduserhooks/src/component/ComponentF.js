import React, { useContext }  from 'react'
import { CountContext } from '../App'


function ComponentF() {
    const countContext = useContext(CountContext)
  return (
    <div>ComponentF
       <button onClick={()=>countContext.countdispatch('increment')}>increment</button> 
       <button onClick={()=>countContext.countdispatch('decrement')}>Decrement</button> 
       <button onClick={()=>countContext.countdispatch('reset')}>Reset</button> 
    </div>
  )
}

export default ComponentF