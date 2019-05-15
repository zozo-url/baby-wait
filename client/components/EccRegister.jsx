import React from 'react'
import { Link }  from 'react-router-dom'
import { postEccUser } from '../apis/api'



// const ecc = props => {
//   const { handleSubmit, pristine, reset, submitting } = props




class  EccRegister  extends React.Component{
  constructor(){
    super()
    this.state = {
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
  
  this.updateState = this.updateState.bind(this)
  this.submit = this.submit.bind(this)
}
updateState(e){
  this.setState({[e.target.name]: e.target.value})
}

submit(e) {
  var user = this.state
  postEccUser(user)
}

  render (){
    return (
          <div>
            <h1>Eary Childhood Register</h1>
            <h2 className="formHeader">Sign Up</h2>
              <div className="main-container">
              <img src="/public/images/dropbox-abc-blocks.jpg" alt=""></img><br/>
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
                  <input type='text' name='suburb' onChange={this.updateState}></input> <br/> <br/>
                  <Link to='login'><button onClick={this.submit}>submit</button></Link>
                </form>
              </div>
          </div>
  )
}
}




export default EccRegister
  

