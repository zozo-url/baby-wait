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
console.log(this.state.value.payload[0].child_first_name)
  return (
    <div className='eccDash'> 
      <h1></h1>
      <br/>
      <br/>
      <h1></h1>
      <h1 className='eccDashHeader'>Your Waitlist</h1>
      {this.state.value.payload.map((item, id) => {
        return <div>
          <p key={id}>{item.child_rank}. {item.child_first_name} {item.child_last_name}  <button>x</button></p> 
          </div>
      })}
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
