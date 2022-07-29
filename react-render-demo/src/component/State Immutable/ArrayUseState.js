import React, { useState } from 'react'

const initialState = ['akshay','ravi','abhishek']



export const ArrayUseState = () => {
    const [person,setPerson] = useState(initialState)
    const handleClick = () =>{
        // person.push('dewa')
        // person.push('azaher')
        // setPerson(person)

        // using  shellow cloneing in array

        const newPerson = [...person]
        newPerson.push('dewa')
        newPerson.push('pandey')
        setPerson(newPerson)
    }

  return (
    <div>
        <button onClick={handleClick}>Click</button>
        {
            person.map(person=><div key={person}>{person}</div>)
        }
    </div>
  )
}
