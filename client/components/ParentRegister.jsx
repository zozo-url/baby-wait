import React from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom"

import {postParentUser} from '../apis/api'
// import {connect} from 'react-redux'
// import {registeraction} from '../Actions/Register'
// import {loginerroraction} from '../Actions/Login'


class  ParentRegister extends React.Component{
  constructor(){
    super()
    this.state = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email: '',
    }
    this.updateState = this.updateState.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateState(e){
    this.setState({[e.target.name]: e.target.value})
  }

  submit(e) {
    var user = this.state
    postParentUser(user)
  }
  render (){
  return(
    <div>
      <h1>Parent Register</h1>
      <h2 className='formHeader'>Sign Up</h2>
      <div className="main-container">
      <form className ='PR_LOGIN'>
        <h3>First Name</h3> 
        <input type='text' name='first_name' onChange={this.updateState}></input> <br/>
        <h3>Last Name</h3>
        <input type='text' name='last_name' onChange={this.updateState}></input> <br/>
        <h3>Username</h3>
        <input type='text' name='username' onChange={this.updateState}></input> <br/>
        <h3>Password</h3>
        <input type='text' name='password' onChange={this.updateState}></input> <br/>
        <h3>Email</h3>
        <input type='text' name='email' onChange={this.updateState}></input> <br/> <br/>
        <Link to='login'><button onClick={this.submit}>submit</button></Link>
      </form>
      </div>
    </div>
  )
}
}

export default ParentRegister