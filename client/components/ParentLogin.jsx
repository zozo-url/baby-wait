import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom"
import { connect } from 'react-redux'
import { login } from '../apis/api'
import { setCurrentUser } from '../actions';
import Fade from 'react-reveal/Fade'


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
    console.log(this.state)
    this.setState({[e.target.name]: e.target.value})
  }

  submit(e){
    console.log("submit")
    console.log(this.state)
    let {username, password} = this.state
    login({username, password})
    .then(user => {
      console.log(user)
      this.props.dispatch(setCurrentUser(user.parentId))
      this.props.history.push('/parent/home')
    })
  }
  render (){
  return(
<div>
<img src = "./images/s1.jpg" className="firstImage"/>
<Fade top delay={500} duration ={1000}>
<div>

<div className='bold-line'></div>
  <div className="main-container">
      <div className='window'>
        <div className='overlay'></div>
        <div className='content'>
        <div className='welcome'>Welcome</div>
      <div className='subtitle'>Please sign in</div>

      <div className='input-fields'>
        <input type='text' placeholder='Username' name="username" className='input-line full-width' onChange={this.updateState} ></input>
        <input type='text' placeholder='Password'  name="password" className='input-line full-width' onChange={this.updateState}></input>

        </div>

        <div className='spacing'>or continue with <span className='highlight'>Facebook</span></div>
      <div><Link to='/parent/home'><button className='ghost-round full-width' onClick={this.submit}>Sign in</button></Link></div>
        </div>
      </div>
    </div>
   
</div>
</Fade>
</div>
  )
} 
} 

export default connect()(ParentLogin)