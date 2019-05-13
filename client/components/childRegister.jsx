import React, { Component } from 'react';
import { connect } from 'react-redux'



class  childRegister  extends React.Component{
  constructor(props){
    super(props)
    this.state={value:''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
    }
    handleChange(event){
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event){
      alert('A name was submitted:' = this.state.value);
    
  
    
  }
  render (){
  return(
    <div>
           <form>
            <label htmlFor="">
            First name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            Last name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            Date of birth:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
    </div>
  )
}

}
export default childRegister