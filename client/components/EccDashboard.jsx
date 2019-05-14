import React from 'react'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { getEccPendingData } from "../apis/api"

class EccDashboard  extends React.Component{
  constructor() {
    super()
    this.state = { 
      currentUser: 1,
      value: []
    }
    // this.getEccPendingData(this.getEccPendingData).bind(this)
  }
  componentWillMount() {
    // this.getEccPendingData(this.state.currentUser)
       getEccPendingData(1, (err,data) => {
           this.setState({value: data});
          
       });
  }


  render () {
     console.log(this.state.value)
  return (
    <div className='Dash'> 
      <h1></h1>
      <br/>
      <br/>
      <div className="header"></div>
      <h1 className='DashHeader'>Your Pending Waitlist</h1>
      <div className="main-container">
      {/* {this.state.value.length > 0 ? this.state.value[0].first_name : ""} */}
      {this.state.value.map((item,id) => {
        return <div>
          <p key={id} className='DashText'>{item.child_rank} {item.first_name} {item.last_name}  <button>x</button></p> 
            {/* <p className='DashSubText'>{item.parent_first_name} {item.parent_last_name}    {item.parent_email}</p> */}
          </div>
      })}
      <br/>
      <Link to='/ecc/settings'><button className='DashButton'>Settings</button></Link>
      </div>
    </div>
  )
}

}
const mapStateToProps = (state) => {
  return {
    data : state.ecc
  }
}

export default connect (mapStateToProps,actions)(EccDashboard);
