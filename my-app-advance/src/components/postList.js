import React, { Component } from 'react'
import axios from 'axios'

class postList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts : [],
       errmsg : ''
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      console.log(res);
      this.setState({
        posts:res.data 
      })
    })
    .catch(err=>{
      console.error(err)},
      this.setState({
        errmsg : 'error retriving data'
      })
      )
  }
  render() {
    const {posts,errmsg} = this.state
    return (
      <div>
        List of post
        {
          posts.length ?
          posts.map(post=><div key={post.id}>{post.title}</div>) : 
          null
        }{errmsg ? <div>{errmsg}</div> : null}
      </div>
    )
  }
}

export default postList