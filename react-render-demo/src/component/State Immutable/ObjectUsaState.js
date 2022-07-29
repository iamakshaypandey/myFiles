import React, { useState } from 'react'

 const initialState = {
    fname : 'akshay',
    lname : 'pandey'
}

export const ObjectUsaState = () => {
    const [person,setPerson] = useState(initialState)
    const changeName = () =>{
        // person.fname='dewa'
        // person.lname='pandey1'
        // setPerson(person)

        // we solve the problem shllow cloneing
        const newPerson = {...person}
        newPerson.fname='dewa'
        newPerson.lname ='pandey 1'
        setPerson(newPerson)
    }
  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
