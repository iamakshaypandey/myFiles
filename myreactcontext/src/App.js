
import './App.css';
import React from 'react';
import ComponetC from './component/ComponetC';

export const userContext = React.createContext()
export const chenalContext = React.createContext()


function App() {
  return (
    <div className="App">
      <userContext.Provider value = {'akshay Devendra'}>
        <chenalContext.Provider value={'pandey'}>
        <ComponetC/>
        </chenalContext.Provider>
      </userContext.Provider>
      
    </div>
  );
}

export default App;
