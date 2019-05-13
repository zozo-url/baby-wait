import React from 'react'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

class EccDashboard  extends React.Component{
  constructor() {
    super()
    this.state = { 

    }
  }
  componentWillMount() {
    this.setState({value: this.props.EccWaitlistInfo()})
  }


  render () {
  return (
    <div className='eccDash'> 
      <h1></h1>
      <br/>
      <br/>
      <h1></h1>
      <h1 className='eccDashHeader'>Your Waitlist</h1>
      {this.state.value.payload.map((item, id) => {
        return <div>
          <p key={id} className='eccDashText'>{item.child_rank}. {item.child_first_name} {item.child_last_name}  <button>x</button></p> 
            <p className='eccDashSubText'>{item.parent_first_name} {item.parent_last_name}    {item.parent_email}</p>
          </div>
      })}
      <br/>
      <Link to='/ecc/settings'><button className='eccButton'>Settings</button></Link>
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
