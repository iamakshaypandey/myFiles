import React, { useMemo } from 'react'
import { useContext } from 'react';
import { countContext } from './ContextParent';

export const ChhildA = () => {
    console.log('childA render');
  return (
    <div>ChildA
        <ChildB/>
    </div>
  )
}

export const MemoizedContext = React.memo(ChhildA)


export const ChildB = () => {
    console.log('childB render');
    return (
      <div>ChildB
          <ChildC/>
      </div>
    )
  }


export const ChildC = () => {
    const count = useContext(countContext)
    console.log('childC render',count);
    return (
      <div>ChildC count --{count}</div>
    )
  }
    