import React from 'react'
<<<<<<< HEAD
import { Field, reduxForm } from 'redux-form'


const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props

=======
import { HashRouter as Router, Route, Link } from "react-router-dom"
>>>>>>> b0d27d023691c3aff1b3cdb4b8ba4fe282157d25



class  ParentLogin  extends React.Component{
<<<<<<< HEAD
  constructor(props){
    super(props)
    this.state={}
   }
  

  }
  render (){
  return(
    <div></div>
=======
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
>>>>>>> b0d27d023691c3aff1b3cdb4b8ba4fe282157d25
  )
}  

export default ParentLogin