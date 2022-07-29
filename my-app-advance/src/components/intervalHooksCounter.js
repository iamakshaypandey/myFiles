import React, { useEffect, useState } from 'react'

function IntervalHooksCounter() {
    const [time,settime] = useState(0)
    
    const tick = () =>{
        settime(prevCount => prevCount + 1)
    }

    useEffect(()=>{
        const interval = setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])

  return (
    <div>
        {time}
    </div>
  )
}

export default IntervalHooksCounter