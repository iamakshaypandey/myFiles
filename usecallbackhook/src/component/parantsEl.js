import React, { useState , useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParantsEl() {
    const [age,setAge] = useState(25)
    const [salary,setsalary] = useState(50000)

    const incrementAge = useCallback(() => {
      setAge(age + 1)
  }
,[age])
    const incrementSalary = useCallback(() =>{
      setsalary(salary + 1000)
      // console.log(salary);
  },[salary])
  return (
    <div>parantsEl
        <Title/>
        <Count text='Age' Count={age}/>
        <Button handleCLick = {incrementAge} >increment Age</Button>
        <Count text='salary' Count={salary}/>
        <Button handleCLick = {incrementSalary}>increment Salary </Button>
    </div>
  )
}

export default ParantsEl