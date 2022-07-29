import React from 'react'

export const ChildTwo = () => {
    console.log('childOne elements render');
  return (
    <div>ChildTwo component</div>
  )
}


export const MemoizedChildTwo = React.memo(ChildTwo)