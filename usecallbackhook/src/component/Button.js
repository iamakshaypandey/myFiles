import React from 'react'

function Button({handleCLick,children}) {
    console.log('rendring button',children);
  return (
    <button onClick={handleCLick}>
      {children}
      </button>    
    
  )
}

export default React.memo(Button)