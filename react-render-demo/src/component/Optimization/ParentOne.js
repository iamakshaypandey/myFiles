import React , {useState} from 'react'
// import {ChildOne} from './ChildOne'
export function ParentOne({ children }) {
    const [count, setCount] = useState(0)
    console.log('Prant Elements render');
  return (
    <div>
        <button onClick={()=>setCount(c=>c+1)}>count--{count}</button>
        {children}
        {/* <ChildOne/> */}
    </div>
  )
}
