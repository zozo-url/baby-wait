import React from 'react'



class  ParentLogin  extends React.Component{
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
    //run function to try find username and password in database
    //if find = console.log("welcome {parent.name}!)
    //if do not find = console.log("sorry u are not a user")
  }
  render (){
  return(
    <div>
      <h1><br/><br/></h1>
      <h2>Log in</h2>
      <form>
        <h3>Username</h3> 
        <input type='text' name='username' onChange={updateState}></input> <br/>
        <h3>Password</h3>
        <input type='text' name='password' onChange={updateState}></input> <br/> <br/>
        <button>submit</button> <br/>
      </form>
    </div>
  )
}

}
export default ParentLogin