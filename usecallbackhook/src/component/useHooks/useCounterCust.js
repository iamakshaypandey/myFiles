import  { useState } from 'react'

function UseCounterCust(initialcount = 0,value) {
    const [count,setcount] = useState(initialcount)

    const increment = () =>{
        setcount(prve=>prve +  value)
    }

    const decrement = () =>{
        setcount(prev=>prev - value)
    }

    const reset =() =>{
        setcount(initialcount)
    }

    return [increment,decrement,reset,count]

}

export default UseCounterCust