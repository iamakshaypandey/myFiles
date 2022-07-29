import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
// import { type } from '@testing-library/user-event/dist/type'

const initialState = {
    loding: true,
    post : {},
    error : ''
}


const reduser = (state,action) =>{
    // console.log(action.playlod);
    switch(action.type){
        case 'FATCH_SUCCESS':
        return {
            loding : false,
            post : action.playlod,
            error : ''
        }

        case 'FATCH_ERROR':
            return{
                loding : false,
                post : {},
                error : 'some thing went rong'
            }

    }
}


  const DatafectingTwo =()=> {

    const [data,dispatch] = useReducer(reduser,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            // console.log(res.data);
            dispatch({type:'FETCH_SUCCESS,',playlod:res.data})
        })
        .catch(err=>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])


    return (
    <div>
        {console.log(data)}
        {/* {data?.loding ? '' : data.post.title} */}
        {/* {data?.error ? data.error : null} */}
    </div>
  )
}

export default DatafectingTwo