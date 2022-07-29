import React, { useMemo, useState } from 'react'

function UsememoHook() {
    const [countone,setcountone] = useState(0)
    const [counttwo,setcounttwo] = useState(0)

    const incremnetone = () =>{
        setcountone(countone+1)
    }
    const incremnettwo = () =>{
        setcounttwo(counttwo+1)
    }

    
    const iseven = useMemo(() =>{
        let i = 0
        while(i<=2000000000) i++
            return countone % 2 === 0
    },[countone]
    )

  return (
    <div>
        <button onClick={incremnetone}>count - {countone}</button>
        <span>{iseven ? 'even' : 'odd'}</span>
        <button onClick={incremnettwo}>count - {counttwo}</button>
    </div>
  )
}

export default UsememoHook