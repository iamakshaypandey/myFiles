// useEffects after render 

import React, { useEffect, useState } from 'react'

function UseEffectsHookOne() {
    const [count,setcount] = useState(0)
    // //////////// conditionaly run effects  /////////////////////
    const [name,setname] = useState('')
    
    useEffect(()=>{
        console.log('ubdate efeects');
        document.title = `you click ${count} times`
    },[count])//using secound arguments we solve the proble conditional run effecs
  return (
    <div>
        <input type='text' value={name} onChange={e=>setname(e.target.value)}/>
        <button onClick={()=>setcount(count+1)}>click {count} time</button>
    </div>
  )
}

export default UseEffectsHookOne