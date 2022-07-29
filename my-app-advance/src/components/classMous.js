//  mouse move efect using class component 

import React, { Component } from 'react'

 class classMous extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          x:0,
          y:0
       }
     }
    logMouseposition=e=>{
        this.setState({x:e.clientX, y:e.clientY})
    }

    componentDidMount(){
        window.addEventListener('mousemove',this.logMouseposition)
    }
  render() {
    return (
      <div>
          x-{this.state.x}
          y-{this.state.y}
      </div>
    )
  }
}

export default classMous