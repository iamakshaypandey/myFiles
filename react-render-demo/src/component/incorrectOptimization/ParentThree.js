import React , {useState} from 'react'
import { MemoizedChildThree } from '../incorrectOptimization/ChildThree';
import { MemoizedChildFour } from './ChildFour';
// import {ChildOne} from './ChildOne'
export function ParentThree() {
    const [count, setCount] = useState(0)
    const [name , setName] = useState('akshay')
    console.log('PrantTwo Elements render');
  return (
    <div>
        <button onClick={()=>setCount(c=>c+1)}>count--{count}</button>
        <button onClick={()=> setName('akshayPAndey')}>name - {name}</button>

        <MemoizedChildFour name={name}/>

        {/* <MemoizedChildThree name ={name}><strong>Hello</strong></MemoizedChildThree> */}
        {/* <ChildOne/> */}

    </div>
  )
}
