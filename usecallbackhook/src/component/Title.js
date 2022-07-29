import React from 'react'

function Title() {
    console.log('title component');
  return (
    <div>
        <h2>uceCallbakHooks Example</h2>
    </div>
  )
}

export default React.memo(Title)