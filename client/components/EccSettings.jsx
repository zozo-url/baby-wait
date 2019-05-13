import React from 'react'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'


class  EccSettings  extends React.Component{
  constructor(){
    super()
    this.state={
      center_name: '',
      ph_number: '',
      url: '',
      email: '',
      address: '',
      suburb: '',
      description: '',
      age: '',
      photo: '',
      username: '',
      hash_password: '',
    }
  }
// to do: add upload photo capabilities

  render (){
  return(
    <div>
      <h1></h1>
      <br/>
      <br/>
      <h1></h1>
      <h2 className="formHeader">Settings</h2>
        <div className="main-container">
        <form>
        <h3 className="formSubHeading">Username</h3> 
        <input type='text' name='username' onChange={this.updateState}></input> <br/>
        <h3 className="formSubHeading">Password</h3>
        <input type='text' name='hash_password' onChange={this.updateState}></input> <br/>
        <h3 className="formSubHeading">Name of ECE</h3>
        <input type='text' name='center_name' onChange={this.updateState}></input> <br/>
        <h3 className="formSubHeading">Email</h3>
        <input type='text' name='email' onChange={this.updateState}></input> <br/>
        <h3 className="formSubHeading">Address</h3>
        <input type='text' name='address' onChange={this.updateState}></input>
        <h3 className="formSubHeading">Suburb</h3>
        <input type='text' name='suburb' onChange={this.updateState}></input> <br/> 
        <h3 className="formSubHeading">Phone Number</h3>
        <input type='text' name='ph_number' onChange={this.updateState}></input> <br/>
        <h3 className="formSubHeading">Website</h3>
        <input type='text' name='url' onChange={this.updateState}></input> <br/>
        <h3 className="formSubHeading">Service Description</h3>
        <input type='text' name='description' onChange={this.updateState}></input> <br/>
        <h3 className="formSubHeading">Service Age Group</h3>
        <input type='text' name='age' onChange={this.updateState}></input> <br/>  
        <br/>
        <Link to='home'><button onClick={this.submit}>submit</button></Link>
      </form>
      </div>
    </div>
  )
}

}
export default EccSettings