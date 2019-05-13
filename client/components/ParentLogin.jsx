import React from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom"



class  ParentLogin  extends React.Component{
  constructor(){
    super()
    this.state={
      username: '',
      password: ''
    }
    this.updateState = this.updateState.bind(this)
  }
  updateState(e){
    this.setState({[e.target.name]: e.target.value})
  }

  submit(e){
    e.preventDefault()
    let {username, password} = this.state
    createUser({username, password})
  }
  render (){
  return(
    <div>
      <h1><br/><br/></h1>
      <h2>Log in</h2>
      <form>
        <h3>Username</h3> 
        <input type='text' name='username' onChange={this.updateState}></input> <br/>
        <h3>Password</h3>
        <input type='text' name='password' onChange={this.updateState}></input> <br/> <br/>
        <button>submit</button> <br/>
      </form>
    </div>
  )
}

}
export default ParentLogin