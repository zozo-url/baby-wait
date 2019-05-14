import React from 'react'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

class EccDashboard  extends React.Component{
  constructor() {
    super()
    this.state = { 
      currentUser: 1,
      value: ''
    }
    // this.getEccPendingData(this.getEccPendingData).bind(this)
  }
  componentWillMount() {
    // this.getEccPendingData(this.state.currentUser)
    this.setState({value: this.props.EccWaitlistInfo()})
  }


  render () {
  return (
    <div className='Dash'> 
      <h1></h1>
      <br/>
      <br/>
      <div className="header"></div>
      <h1 className='DashHeader'>Your Waitlist</h1>
      <div className="main-container">
      {this.state.value.payload.map((item, id) => {
        return <div>
          <p key={id} className='DashText'>{item.child_rank}. {item.child_first_name} {item.child_last_name}  <button>x</button></p> 
            <p className='DashSubText'>{item.parent_first_name} {item.parent_last_name}    {item.parent_email}</p>
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
    data : state.eccWaitlist
  }
}

export default connect (mapStateToProps,actions)(EccDashboard);
