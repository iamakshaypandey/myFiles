import React, { useState } from 'react'
import UseFormCust from './useHooks/UseFormCust'

function UserForm() {
    // const [firstNAme,setFirstName] = useState('')
    // const [LastName,setLastName] = useState('')
    const [firstName,bindFirstName,resetFirstname] = UseFormCust('')
    const [lastname,bindlastName,resetlastname] = UseFormCust('')


   const submitHandler = e =>{
       e.preventDefault()
       alert(`hello dear ${firstName} ${lastname}`)
       resetFirstname()
       resetlastname()
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>First Name</label>
            <input {...bindFirstName} type="text" />
            <br />
            <label>last Name</label>
            <input {...bindlastName} type="text" />
            <button>submit</button>
        </form>
    </div>
  )
}

export default UserForm