import React, { Component } from 'react'

 class classCounterTwo extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          count:0
       }
    }
    incrimentCount = ()=>{
        this.setState(prveState=>{
            return {
                count : prveState.count + 1
            }
        })
    }
  render() {
    return (
      <div>classCounterTwo
         <button onClick={this.incrimentCount}>
             count {this.state.count}
         </button>
      </div>
    )
  }
}

export default classCounterTwo