import React from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import * as actions from "../actions";
import { postRegisteredChild } from '../apis/api';




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
      <div className="padding"></div>
      <div className="main-container">
      <h1></h1>
      <br/>
      <br/> 
      <h2 className="formHeader">Register your child</h2>
           <form>
            <label htmlFor="">
            First name:
            <input type="text" name='first_name' onChange={this.handleChange} />
            Last name:
            <input type="text" name='last_name' onChange={this.handleChange} />
            Date of birth:
            <input type="text" name='date_of_birth' onChange={this.handleChange} />
            </label>
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