import React , {useCallback, useMemo, useState} from 'react'
import { ChhildA } from './ContextChildren';
import { MemoizedContext } from './ContextChildren';

export const countContext = React.createContext()
const CountProvider = countContext.Provider


export function ContextParent() {
    const [count, setCount] = useState(0)
    
    console.log('contextParents Render');

  return (
    <div>
        <button onClick={()=>setCount(c=>c+1)}>count--{count}</button>
        <CountProvider value={count}>
            <MemoizedContext/>
        </CountProvider>
    </div>
  )
}
