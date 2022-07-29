import React from 'react'
import { userContext,chenalContext } from '../App'

function ComponentF() {
  return (
    <div>
        <userContext.Consumer>
            {
                user=>{
                    return (
            <chenalContext.Consumer>
                {
                    chenal=>{
                        return <div>user context value {user} or chenal is {chenal}</div>
                    }
                }
            </chenalContext.Consumer>
                    )
                }
            }
        </userContext.Consumer>
    </div>
  )
}

export default ComponentF