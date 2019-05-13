import React from 'react'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'


class  EccList  extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render (){
  return(
    <div>
      <h1>
      </h1>
      <br/>
      <br/>
        <h1>I am a list of eccs</h1>
        <Link to='/parent/registerwaitlist'><button>I want to register for this ecc</button></Link> <br/>
        <Link to='/parent/home'><button>back to parent dashboard</button></Link>
    </div>
  )
}

}
export default EccList