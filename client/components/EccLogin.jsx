import React from 'react'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import {eccLogin} from '../apis/api'

class  EccLogin  extends React.Component{
  constructor(props){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.updateState = this.updateState.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateState(e){
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }

  submit(e){
    console.log("submit")
    let {username, password} = this.state
    eccLogin({username, password})
  }

  render (){
    console.log(this.state)
  return(
    <div>
      <div className="main-container">
      <h1></h1>
      <br/>
      <br/>
      <h2>Log in</h2>
      <form>
        <h3>Username</h3> 
        <input type='text' name='username' onChange={this.updateState}></input> <br/>
        <h3>Password</h3>
        <input type='text' name='password' onChange={this.updateState}></input> <br/> <br/>
        <Link to='/ecc/home'><button onClick={this.submit}>submit</button></Link> <br/>
      </form>
      </div>
 
   </div>
  )
}

}
export default EccLogin