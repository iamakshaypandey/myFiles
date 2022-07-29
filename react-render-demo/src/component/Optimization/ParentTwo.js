import React , {useState} from 'react'
import { MemoizedChildTwo } from './ChildTwo';
// import {ChildOne} from './ChildOne'
export function ParentTwo() {
    const [count, setCount] = useState(0)
    const [name , setName] = useState('akshay')
    console.log('PrantTwo Elements render');
  return (
    <div>
        <button onClick={()=>setCount(c=>c+1)}>count--{count}</button>
        <button onClick={()=> setName('akshayPAndey')}>name - {name}</button>
        <MemoizedChildTwo name ={name}/>
        
        {/* <ChildOne/> */}
    </div>
  )
}
