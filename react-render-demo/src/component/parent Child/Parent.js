import React , {useState} from 'react'
import { Child } from './Child';
export function Parent() {
    const [count, setCount] = useState(0)
    console.log('Prant Elements render');
  return (
    <div>
        <button onClick={()=>setCount(c=>c+1)}>count--{count}</button>
        <button onClick={()=>setCount(0)}>count--0</button>
        <button onClick={()=>setCount(5)}>count--5</button>
        <Child/>
    </div>
  )
}
