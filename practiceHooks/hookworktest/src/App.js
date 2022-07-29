
import { useState } from 'react';
import './App.css';
import Chaild from './Chaild';

function App() {
  const [new1, setNew] = useState("")
  const ondata = (item) => {

    setNew(item)
  }
  const father = "father"
  return (
    <div className="App">
      <div> {new1}</div>
      <Chaild data={ondata} />
    </div>
  );
}

export default App;
