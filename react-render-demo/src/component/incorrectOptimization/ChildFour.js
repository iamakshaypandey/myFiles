import React from 'react'

export const ChildFour = ({name}) => {
    const date = new Date()
    console.log('childFour elements render');
  return (
    <div>Hello {name} . its is currantly  {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
  )
}


export const MemoizedChildFour = React.memo(ChildFour)