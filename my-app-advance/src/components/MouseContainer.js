// use effects with cleanup


import React, { useState } from 'react'
import HookmouseEffect from './HookmouseEffect'

function MouseContainer() {
    const [display,setdisplay] = useState(true)
  return (
    <div>
        <button onClick={()=>setdisplay(!display)}>toggle Button</button>
        {display && <HookmouseEffect/>}
    </div>
  )
}

export default MouseContainer