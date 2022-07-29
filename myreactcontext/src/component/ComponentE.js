import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import {userContext,chenalContext} from '../App'

function ComponentE() {
    const user = useContext(userContext)
    const chenal = useContext(chenalContext)

  return (
    <div>
        {/* <ComponentF/> */}
        {/* useing use context */}
        {user} - {chenal}
    </div>
  )
}

export default ComponentE