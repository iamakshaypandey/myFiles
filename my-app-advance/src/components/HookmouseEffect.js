// efects only ones useefects is not calling multiple time use empty array as a arguments


import React, { useEffect, useState } from 'react'

function HookmouseEffect() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMouseposition = e =>{
        console.log('mouseEvent');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useeffect is calling');
        window.addEventListener('mousemove',logMouseposition)

        // unmounting the eventlistioner using return function

        return () => {
            console.log('component unmounting code');
            window.removeEventListener('mousemove',logMouseposition)
        }
    },[])
  return (
    <div>
        X-{x}
        Y-{y}
    </div>
  )
}

export default HookmouseEffect