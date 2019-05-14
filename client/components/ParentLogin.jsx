import React from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom"
import { connect } from 'react-redux'
import { login } from '../apis/api'
import { setCurrentUser } from '../actions';


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
    let {username, password} = this.state
    login({username, password})
    .then(user => {
      console.log(user)
      this.props.dispatch(setCurrentUser(user.parentId))
    })
  }
  render (){
  return(
    <div>
      <h1><br/><br/></h1>
      <div className="main-container">
      <h2 className="formHeader">Log in</h2>
      <form>
        <h3>Username</h3> 
        <input type='text' name='username' onChange={this.updateState}></input> <br/>
        <h3>Password</h3>
        <input type='text' name='password' onChange={this.updateState}></input> <br/> <br/>
        <Link to='/parent/home'><button onClick={this.submit}>submit</button></Link> <br/>
      </form>
     </div>
    </div>
  )
} 
} 

export default connect()(ParentLogin)