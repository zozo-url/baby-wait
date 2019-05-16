import React from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import * as actions from "../actions";
import { postRegisteredChild } from '../apis/api';
import Header from './Header'




class  ChildRegister  extends React.Component{
  constructor(props){
    super(props)
    this.state={
      first_name:'',
      last_name:'',
      date_of_birth:'',
    };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
    }

    componentDidMount() {
        this.setState({ ...this.state, parent_id: this.props.currentUser });
    }

    handleChange(e){
      this.setState({[e.target.name]: e.target.value});
    }
  
    handleSubmit(e){
      console.log('state for sending:', child)
      var child = this.state
      postRegisteredChild(child)
      // link the page to parent dashboard
      // and grab parent id before submit
    }
    
    
    
  
    
  
  render (){
    console.log(this.state)
  return(
    <div>
      <Header/>
      <div className="padding"></div>
      <div className="Dash">
      <h1></h1>
      <br/>
      <br/> 
      <h2 className="DashHeader">Register your child</h2>
      <br/>
           <form className="DashForm">
            <label htmlFor="">
            <p className="DashText">First name:</p>
            <input className="DashText" type="text" name='first_name' onChange={this.handleChange} /> <br/> <br/>
            <p className="DashText">Last name:</p>
            <input className="DashText" type="text" name='last_name' onChange={this.handleChange} /><br/> <br/>
            <p className="DashText">Date of birth:</p>
            <input className="DashText" type="text" name='date_of_birth' onChange={this.handleChange} /><br/>
            </label>
            <br/>
            <Link to='/parent/home'><button className="DashButton" onClick={this.handleSubmit}>Add a child</button></Link>
            <Link to='/parent/home'><button className="DashButton">back</button></Link>
            </form>
       </div> 
    </div>
  )
}
}
const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

export default connect (mapStateToProps, actions)(ChildRegister)