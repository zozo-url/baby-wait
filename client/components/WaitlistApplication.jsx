import React from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom"
import { connect } from 'react-redux'
import { selectEcc, setCurrentUser, fetchChildrenOfParent } from '../actions/'
import { postChildToWaitlist } from '../apis/api';

class  WaitlistApplication  extends React.Component{
  constructor(){
    super()
    this.state={
      child_id: '',
      ecc_id: '',
      status: 'pending',
      rank_ecc: null,
      rank_parent: null
    }
    this.createChildList = this.createChildList.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  createChildList(parentId) {
    this.props.getParentsChildren(parentId)
  }

  handleSubmit(){
    var selectedChildId = document.getElementById('selectChild').value
    this.setState({child_id: selectedChildId})
    console.log(this.state)
  }



  componentDidMount() {
    if(this.props.currentUser) {
      this.createChildList(this.props.currentUser)
    } else {
      this.props.history.push('/parent/login')
    }
  }

  render (){
    console.log('eccId: ', this.props.data.eccId)
  return(
    <div>
      <br/>
      <br/>
      <br/>
      <h1>Apply For This Waitlist</h1>
      <br/>
      <div className="main-container">
      <h3>Select child you want to enrol:</h3>
      <select id="selectChild">
        {this.props.data.usersChildren.map((child, index) => <option key={index} value={child.id}>{child.first_name}</option>)}
      </select>
      <br/>
      <Link to='/parent/home'><button className="DashButton" onClick={this.handleSubmit}>submit</button></Link> 
      <button className="DashButton">back</button>
      {/* <h3>or fill out this form:</h3>
      <form>
            <label htmlFor="">
            First name: <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} /> <br/>
            Last name: <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} /> <br/>
            Date of birth: <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} /> <br/>
            </label>
            <Link to='/parent/home'><input type="submit" value="Submit" /></Link>
            </form> */}
       </div>     
    </div>
  )
}

}

const mapStateToProps = (state) => {
  return {
    data: state.ecc,
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getParentsChildren: (parentId) => dispatch(fetchChildrenOfParent(parentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitlistApplication)