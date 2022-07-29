import React from 'react'
import UseCounterCust from './useHooks/useCounterCust'

function UseCounterTwo() {
    const [increment,decrement,reset,count] = UseCounterCust(0,1)
  return (
    <div>
        <h2>count - {count}</h2>
        <button onClick={increment}>incremnt</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default UseCounterTwo