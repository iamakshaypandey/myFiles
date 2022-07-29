import React, { useState } from 'react'
import { ChildOne } from './ChildOne'
import { ParentOne } from './ParentOne'

export const GrandParent = () => {
    const [newCount,setNewCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setNewCount(c=>c+1)}>GrandParent {newCount}</button>
        <ParentOne newCount ={newCount}>
            <ChildOne/>
        </ParentOne>
    </div>
  )
}
