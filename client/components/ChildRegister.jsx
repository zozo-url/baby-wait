import React from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'




class  ChildRegister  extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value:'',
      first_name:'',
      last_name:'',
      date_of_birth:'',


    };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(event){
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event){
      event.preventDefault()
      
    
  
    
  }
  render (){
  return(
    <div>
      <h1></h1>
      <br/>
      <br/>
           <form>
             <h1>Register your child</h1>
            <label htmlFor="">
            First name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            Last name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            Date of birth:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <Link to='/parent/home'><input type="submit" value="Submit" /></Link>
            </form>
    </div>
  )
}

}
export default ChildRegister