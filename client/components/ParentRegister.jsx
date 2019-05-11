import React from 'react'



class  ParentRegister extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render (){
  return(
    <div>
        <form action="action_page.php" style="border:1px solid #ccc">
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <br/>
           
            firstName:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            lastName:
            <input type="text" value={this.state.value} onChange={this.handleChange} />

            Email
            <input type="text" placeholder="Enter Email" name="email" required value={this.state.value} onChange={this.handleChange} />

            Password
            <input type="password" placeholder="Enter Password" name="psw" required value={this.state.value} onChange={this.handleChange} />

            Repeat Password
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required value={this.state.value} onChange={this.handleChange} />

            <label>
                   <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px" value={this.state.value} onChange={this.handleChange} /> Remember me
            </label>

            <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

            <div className="clearfix">
              <button value={this.state.value} onChange={this.handleChange}  className="cancelbtn">Cancel</button>
              
              <button type="submit" className="signupbtn"value={this.state.value} onChange={this.handleChange}>Sign Up</button>
            </div>
          </div>
        </form>

     </div>
   )
  }
}

export default ParentRegister