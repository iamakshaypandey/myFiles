
import React, { useReducer } from 'react';
import './App.css';
// import CounterOne from './component/CounterOne';
// import CounterTwo from './component/CounterTwo';
// import CounterThree from './component/Counterthree';
import ComponentA from './component/ComponentA';
import ComponentD from './component/ComponentD';
import ComponentF from './component/ComponentF';
import DatafetchingOne from './component/datafetchingOne';
import DatafectingTwo from './component/datafectingTwo';


export const CountContext = React.createContext()


const initialState = 0
const reducer = (state,action)=>{
    switch(action){
        case 'increment': 
        return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default :
        return state

    }

}



function App() {
  const [count,dispatch] =useReducer(reducer,initialState)
  return (
    <div className="App">
      {/* datafetching with useEffect */}
    {/* <DatafetchingOne/> */}
    {/* datafetching with useEffect and usereduser function */}
    <DatafectingTwo/>

    {/* usereduser with usecontext use multile component  */}
    <CountContext.Provider value={{countState:count,countdispatch:dispatch}}>
    <div>count - {count}</div>
    <ComponentA/>
    <ComponentD/>
    <ComponentF/>
    </CountContext.Provider>

    {/* use Reduser hooks simpal complax and multiple time usereduser single reduse function */}
    {/* <CounterOne/> */}
    {/* <CounterTwo/> */}
    {/* <CounterThree/> */}
    </div>
  );
}

export default App;
