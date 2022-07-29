import React, { useEffect, useState } from 'react'
import axios from 'axios'

{/* all data render using api use effects */}
// function DataFetchUseEffect() {
//     const [posts, setPost] = useState([])
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res=>{
//             console.log(res.data);
//             setPost(res.data)
//         })
//         .catch(err=>console.log(err))
//     },[])
//   return (
//     <div>
//         <ul>
//             {
//             posts.map(post=>(
//                 <li key={post.id}>{post.title}</li>
//             ))
//             }
//         </ul>
//         {/* perticuler id data render user input  */}
//     </div>
//   )
// }

// export default DataFetchUseEffect


{/* perticuler id data render user input  */}
function DataFetchUseEffect() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromButtonClick, setIDFromButtonClick] = useState(1)

    const ClickHandler = () =>{
        setIDFromButtonClick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            console.log(res.data);
            setPost(res.data)
        })
        .catch(err=>console.log(err))
    },[idFromButtonClick])
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)} />
        <button type='button' onClick={ClickHandler}>fetch post</button>
        <h4>{post.title}</h4>
    </div>
  )
}

export default DataFetchUseEffect