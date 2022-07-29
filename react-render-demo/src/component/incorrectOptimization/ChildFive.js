import React from 'react'

export const ChildFive = ({name,person}) => {
    console.log('child Five render');
  return (
    // <div>Hello {name} {person.fname} {person.lname}</div>
    <div>Hello {name}</div>

  )
}

export const MemoizedChildFive = React.memo(ChildFive)
