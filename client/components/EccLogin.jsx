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
       
  <img src = "./images/s1.jpg" className="firstImage"/>
    <div>
         <div className='overlay'>
             <div className='bold-line'></div> 
             <div className="main-container">
                 <div className='window'>
                    <div className='content'>
                       <div className='welcome'>Log in</div>
                       <div className='subtitle'></div>

                     <div className='input-fields'>
                         <input type='text'  placeholder='Username' name="username" className='input-line full-width' onChange={this.updateState} ></input>
                         <input type='text' placeholder='Password'  name="password" className='input-line full-width' onChange={this.updateState}></input>

                     </div>

                     <div className='spacing'>or continue with <span className='highlight'>Facebook</span></div>
                     <div><Link to='/parent/home'><button className='ghost-round full-width' onClick={this.submit}>Sign in</button></Link></div>
                  </div>
             </div>
             </div>
           </div>
   

    </div>
   
   
   
   
   </div>
  )
}

}
export default EccLogin