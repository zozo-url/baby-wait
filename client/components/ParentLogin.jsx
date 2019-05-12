import React from 'react'



class  ParentLogin  extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render (){
  return(
    <div>
      <h1><br/><br/></h1>
      <h2>Sign Up</h2>
      <form>
        <h3>Username</h3> 
        <input type='text'></input> <br/>
        <h3>Password</h3>
        <input type='text'></input> <br/>
        <button>submit</button> <br/>
      </form>
    </div>
  )
}

}
export default ParentLogin