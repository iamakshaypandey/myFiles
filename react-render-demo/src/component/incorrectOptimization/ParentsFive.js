import React , {useCallback, useMemo, useState} from 'react'
import { MemoizedChildFive } from '../incorrectOptimization/ChildFive';
import { MemoizedChildFour } from './ChildFour';
// import {ChildOne} from './ChildOne'
export function ParentsFive() {
    const [count, setCount] = useState(0)
    const [name , setName] = useState('akshay')
    console.log('PrantTwo Elements render');

    const person = {
        fname:'dhiraj',
        lname:'sharma'
    }

    const handleClick=()=>{}
    // using usecalllback hook and usememohook solve the problem child rerender

    const memoizedPerson = useMemo(()=>person,[])

    const memoizedHandelClick = useCallback(handleClick,[])


  return (
    <div>

        <button onClick={()=>setCount(c=>c+1)}>count--{count}</button>
        <button onClick={()=> setName('akshayPAndey')}>name - {name}</button>
        {/* <MemoizedChildFive name={name} /> // without using objects or function only parents render */}
        {/* <MemoizedChildFive name={name} person={person}/> //psing a objects */}
        {/* <MemoizedChildFive name={name} person={memoizedPerson}/> //using usememohook solve the problem  */}
        {/* <MemoizedChildFive name={name} handleClick={handleClick}/> // pasing a empty function both condition child rerender */}
        <MemoizedChildFive name={name}  handleClick={memoizedHandelClick}/> // pasing a empty function both condition child rerender

    </div>
  )
}
