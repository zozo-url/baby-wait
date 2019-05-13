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
      <h1><br/><br/></h1>
      <h2>Sign Up</h2>
      <form>
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
        <Link to='/login'><button onClick={this.submit}>submit</button></Link>
      </form>
    </div>
  )
}
}

//         <form action="action_page.php" style="border:1px solid #ccc">
//           <div className="container">
//             <h1>Sign Up</h1>
//             <p>Please fill in this form to create an account.</p>
//             <br/>
           
//             firstName:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//             lastName:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />

//             Email
//             <input type="text" placeholder="Enter Email" name="email" required value={this.state.value} onChange={this.handleChange} />

//             Password
//             <input type="password" placeholder="Enter Password" name="psw" required value={this.state.value} onChange={this.handleChange} />

//             Repeat Password
//             <input type="password" placeholder="Repeat Password" name="psw-repeat" required value={this.state.value} onChange={this.handleChange} />

//             <label>
//                    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px" value={this.state.value} onChange={this.handleChange} /> Remember me
//             </label>

//             <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

//             <div className="clearfix">
//               <button value={this.state.value} onChange={this.handleChange}  className="cancelbtn">Cancel</button>
              
//               <button type="submit" className="signupbtn"value={this.state.value} onChange={this.handleChange}>Sign Up</button>
//             </div>
//           </div>
//         </form>

//      </div>
//    )
//   }
// }

// const mapStateToProps = ({auth}) => {
//   return {
//     auth
//   }
// }

// export default connect(mapStateToProps)(ParentRegister)
export default ParentRegister