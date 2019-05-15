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

<div className='bold-line'></div>
  <div className="main-container">
      <div className='window'>
        <div className='overlay'></div>
        <div className='content'>
        <div className='welcome'>Eary Childhood Register</div>
      <div className='subtitle'>Sign Up</div>

      <div className='input-fields'>
        <input type='text' name='username' placeholder='Username' className='input-line full-width' onChange={this.updateState} ></input>
        <input type='text' name='hash_password' placeholder='Password' className='input-line full-width' onChange={this.updateState}></input>
        <input type='text' name='center_name' placeholder='Name of ECE' className='input-line full-width' onChange={this.updateState}></input>
        <input type='text' name='email' placeholder='Eamil' className='input-line full-width' onChange={this.updateState}></input>
        <input type='text' name='address' placeholder='Address' className='input-line full-width' onChange={this.updateState}></input>
        <input type='text' name='suburb' placeholder='Suburb' className='input-line full-width' onChange={this.updateState}></input>
        </div>

        
      <div><Link to='/login'><button className='ghost-round full-width' onClick={this.submit}>SUbmit</button></Link></div>
        </div>
      </div>
    </div>
   
</div>



  )
}
}




export default EccRegister
  

