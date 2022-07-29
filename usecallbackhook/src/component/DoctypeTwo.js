//why we need custum Hooks because same logic is use deffrent compononts so its rprting again 

import React, { useEffect, useState } from 'react'
import UseDocuments from './useHooks/useDocuments'

function DoctypeTwo() {
    const [count,setCount] = useState(0)

    // useEffect(()=>{
    //     document.title=`count - ${count}`
    // },[count])
    // import custum hooks 
    UseDocuments(count)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>count - {count}</button>
    </div>
  )
}

export default DoctypeTwo