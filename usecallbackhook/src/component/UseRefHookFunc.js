import React, { useEffect, useRef, useState } from 'react'

function UseRefHookFunc() {
    const [timer,setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setTimer(prevTime => prevTime + 1)
        }, 1000);
        return ()=> clearInterval(intervalRef.current)
    },[])

  return (
    <div>
        clock -timer Func -{timer}
        <button onClick={()=>clearInterval(intervalRef.current)}>stop timer</button>
    </div>
  )
}

export default UseRefHookFunc