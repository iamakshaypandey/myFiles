import {useEffect} from 'react'

function UseDocuments(count) {
    useEffect(()=>{
        document.title=`count - ${count}`
    },[count])
}

export default UseDocuments