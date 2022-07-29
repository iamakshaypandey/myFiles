// set previus state using counter 

import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count,setcount] = useState(initialCount)
    const incrimentFive =()=>{
        for(let i=0 ; i<5 ; i++){
            setcount(prev => prev+1)
        }
    }

  return (
    <div>
        count:{count}
        <button onClick={()=>setcount(prev => prev-1)}>dicriment</button>
        <button onClick={()=>setcount(prev => prev+1)}>incriment</button>
        <button onClick={()=>setcount(initialCount)}>Reset</button>
        <button onClick={incrimentFive}>incriment 5</button>

        
    </div>
  )
}

export default HookCounterTwo