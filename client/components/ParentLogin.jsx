import React from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom"

import { login } from '../apis/api'


class  ParentLogin  extends React.Component{
  constructor(){
    super()
    this.state={
      username: '',
      password: ''
    }
    this.updateState = this.updateState.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateState(e){
    this.setState({[e.target.name]: e.target.value})
  }

  submit(e){
    console.log("submit")
    e.preventDefault()
    let {username, password} = this.state
    login({username, password})
  }
  render (){
  return(
    <div>
      <h1><br/><br/></h1>
      <h2>Log injlkjl</h2>
      <form onSubmit={this.submit}>
        <h3>Username</h3> 
        <input type='text' name='username' onChange={this.updateState}></input> <br/>
        <h3>Password</h3>
        <input type='text' name='password' onChange={this.updateState}></input> <br/> <br/>
        <button>submit</button>
        <Link to='/parent/home'><button>submit</button></Link> <br/>
      </form>
    </div>
  )
} 
} 

export default ParentLogin