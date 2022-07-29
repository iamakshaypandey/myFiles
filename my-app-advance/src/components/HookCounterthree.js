// useState with objects using setstate set privius property shellowCloning use


import React, { useState } from 'react'

function HookCounterthree() {
    const [name,setName] = useState({firstName:'', lastName:''})

  return (
    <div>
        <input type="text" value={name.firstName} onChange={e=>setName({...name ,firstName:e.target.value})}/>
        <input type="text" value={name.lastName} onChange={e=>setName({...name ,lastName:e.target.value})}/>
        <h2>This is first Name {name.firstName}</h2>
        <h2>This is last Name {name.lastName}</h2>
    </div>
  )
}

export default HookCounterthree