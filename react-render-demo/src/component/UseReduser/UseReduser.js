import React,{useReducer} from 'react'

const initialState = 0

const reducer = (state,action)=>{
    switch(action){
        case 'increment':
        return state + 1
        case 'decrement':
        return state - 1
        case 'reset':
        return initialState
        default: return state
    }
}

export const UseReduser = () => {
    const [count,dispatch] = useReducer(reducer,initialState)
    console.log('use Reduser render');
  return (
    <div>
        <div>count-{count}</div>
        <button onClick={()=>dispatch('increment')}>increment</button> 
        <button onClick={()=>dispatch('decrement')}>Decrement</button> 
        <button onClick={()=>dispatch('reset')}>Reset</button> 
    </div>
  )
}
