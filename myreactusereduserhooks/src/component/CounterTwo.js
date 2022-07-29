// complex state

import React, { useReducer } from 'react'


const initialState = {
    firstCounter:0,
    secoundCounter:10
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'increment': 
        return {...state,firstCounter:state.firstCounter + action.value}
        case 'decrement':
            return {...state,firstCounter:state.firstCounter - action.value}
        case 'increment2': 
            return {...state,secoundCounter:state.secoundCounter + action.value}
        case 'decrement2':
            return {...state,secoundCounter:state.secoundCounter - action.value}    
        case 'reset':
            return initialState
        default :
        return state

    }

}


function CounterTwo() {
   const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div>count-{count.firstCounter}</div>
        <div>counter - 2 {count.secoundCounter}</div>
       <button onClick={()=>dispatch({type:'increment' , value:1})}>increment</button> 
       <button onClick={()=>dispatch({type:'decrement' , value:1})}>Decrement</button> 
       <button onClick={()=>dispatch({type:'increment' , value:5})}>increment5</button> 
       <button onClick={()=>dispatch({type:'decrement' , value:5})}>Decrement5</button> 
       <button onClick={()=>dispatch({type:'increment2' , value:2})}>increment2</button> 
       <button onClick={()=>dispatch({type:'decrement2' , value:2})}>Decrement2</button> 
       <button onClick={()=>dispatch({type:'reset'})}>Reset</button> 
    </div>
  )
}

export default CounterTwo