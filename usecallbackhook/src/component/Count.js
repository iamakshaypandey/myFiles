import React from 'react'

function Count({text,Count}) {
    // console.log(text,Count);
  return (
    <div>{text}-{Count}</div>
  )
}

export default React.memo(Count)