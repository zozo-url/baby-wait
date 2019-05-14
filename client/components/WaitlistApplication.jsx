import React from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom"
import { connect } from 'react-redux'
import { getChildWithParentId, fetchChildrenOfParent } from '../actions/'

class  WaitlistApplication  extends React.Component{
  constructor(){
    super()
    this.state={
      selectedChild: 'child1'
    }
    this.createChildList = this.createChildList.bind(this)
  }

  createChildList(parentId) {
    this.props.getParentsChildren(parentId)
  }

  componentDidMount() {
    this.createChildList(2) //changefrom hardcoded to currentUserId later
  }

  render (){
  return(
    <div>
      <br/>
      <br/>
      <br/>
      <h1>Apply For This Waitlist</h1>
      <br/>
      <div className="main-container">
      <h3>Select child you want to enrol:</h3>
      <select onSelect={this.handleChange}>
        {this.props.data.usersChildren.map(child => <option value={child.id}>{child.first_name}</option>)}
      </select>
      <br/>
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
    data: state.ecc
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getParentsChildren: (parentId) => dispatch(fetchChildrenOfParent(parentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitlistApplication)