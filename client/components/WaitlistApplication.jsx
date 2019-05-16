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
    this.handleChange = this.handleChange.bind(this)
  }

  createChildList(parentId) {
    this.props.getParentsChildren(parentId)
  }


  handleChange(){
      var idString = document.getElementById('selectChild').value
      var selectedChildId = Number(idString)
      console.log("child_id", selectedChildId)
    console.log("ecc_id", this.props.data.eccId)
    this.setState({
      child_id: selectedChildId,
      ecc_id: this.props.data.eccId
    })
  }

  handleSubmit(){
    console.log("this state: ", this.state)
    var newChildToWaitlist = this.state
    postChildToWaitlist(newChildToWaitlist)
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
      <br/>
      <div className="Dash">
      <h2 className="DashHeader">Select child you want to enrol:</h2>
        <br/>
        <div className="DashLayout">
      <select className="DashButton" id="selectChild" onChange={this.handleChange}>
      <option className="DashButton"  value="select">select a child</option>
        {this.props.data.usersChildren.map((child, index) => <option key={index} value={child.id}>{child.first_name}</option>)}
      </select>
      <br/>
      <Link to='/parent/home'><button className="DashButton" onClick={this.handleSubmit}>submit</button></Link> 
      <button className="DashButton">back</button></div>
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