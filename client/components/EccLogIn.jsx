import React from 'react'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'

class  EccLogIn  extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  updateState(e){
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }

  submit(e){
    console.log("submit")
    let {username, password} = this.state
    // login({username, password})
  }

  render (){
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
export default EccLogIn