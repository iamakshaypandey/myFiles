// import logo from './logo.svg';
import './App.css';
import {UseState} from './component/UseState/UseState'
import {UseReduser} from './component/UseReduser/UseReduser'
import {ObjectUsaState} from './component/State Immutable/ObjectUsaState'
import {ArrayUseState} from './component/State Immutable/ArrayUseState'
import {Parent} from './component/parent Child/Parent'
import {ParentOne} from './component/Optimization/ParentOne'
import { ChildOne } from './component/Optimization/ChildOne';
import { GrandParent } from './component/Optimization/GrandParent';
import { ParentTwo } from './component/Optimization/ParentTwo';
import {ParentThree} from './component/incorrectOptimization/ParentThree'
import {ParentsFive} from './component/incorrectOptimization/ParentsFive'
import {ContextParent} from './component/context/ContextParent'

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseReduser/> */}
      {/* <ObjectUsaState/> */}
      {/* <ArrayUseState/> */}
      {/* <Parent/> */}

      {/* optimization */}

      {/* <ParentOne>
          <ChildOne/>
      </ParentOne> */}

      {/* grand perent */}
      {/* <GrandParent/> */}
      {/* memo */}
      {/* <ParentTwo/> */}

      {/* immutable memo */}

      {/* <ParentThree/> */}


      {/* incorrect memo with props reffrence  */}

      {/* <ParentsFive/> */}


      {/* context render */}
      
      <ContextParent/>
    </div>
  );
}

export default App;
