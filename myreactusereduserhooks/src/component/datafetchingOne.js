import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DatafetchingOne() {
    const [loding,setloding] = useState(true)
    const [post,setpost] = useState({})
    const [err,seterr] = useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            setloding(false)
            setpost(res.data)
            seterr('')
        })
        .catch(err=>{
            setloding(false)
            setpost({})
            seterr('someting went rong')
        })
    },[])
  return (
    <div>
        {loding ? 'loding' : post.title}
        {err ? err : null}
    </div>
  )
}

export default DatafetchingOne