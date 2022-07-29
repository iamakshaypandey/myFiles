// custom hooks react creat a function 

import {useState} from 'react'

function UseFormCust(initialvalue) {
    const [value,setvalue] = useState(initialvalue)

    const reset = () =>{
        setvalue(initialvalue)
    }

    const bind={
        value,
        onChange : e =>{
            setvalue(e.target.value)
        }
    }
    return [value,bind ,reset]
}

export default UseFormCust