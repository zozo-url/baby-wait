import React from 'react'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { getEccPendingData, getEccWaitlistData } from "../apis/api"

class EccDashboard  extends React.Component{
  constructor() {
    super()
    this.state = { 
      currentUser: 1,
      pendingValue: [],
      waitlistValue: []
    }
    // this.getEccPendingData(this.getEccPendingData).bind(this)
  }
  componentWillMount() {
    // this.getEccPendingData(this.state.currentUser)
   
       getEccPendingData(1, (err,data) => {
           this.setState({pendingValue: data});
           
       });

       getEccWaitlistData(1,(err,data) => {
         this.setState({waitlistValue: data});
       })
           
  }


  render () {
     console.log('pending: ', this.state.pendingValue)
     console.log('waitlist: ', this.state.waitlistValue)
  return (
    <div className='Dash'> 
      <br/>
      <br/>
      <br/>
      <div className="main-container">
      <div className="header"></div>
      <h1 className='DashHeader'>Your Pending Waitlist</h1>
      
      {/* {this.state.pendingValue.length > 0 ? this.state.pendingValue[0].first_name : ""} */}
      {this.state.pendingValue.map((item,id) => {
        return <div>
          <p key={id} className='DashText'>{item.child_rank} {item.child_first_name} {item.child_last_name}  <button className=''>x</button></p> 
            <p className='DashSubText'>{item.parent_first_name} {item.parent_last_name}    {item.parent_email}</p>
        </div>
      })}
       </div>
              <div className="main-container">
            <h1 className='DashHeader'>Your Waitlist</h1>
             
             {this.state.waitlistValue.map((item,id) => {
        return <div>
                    <p key={id} className='DashText'>
          {item.child_rank} {item.child_first_name} {item.child_last_name}  <button className=''>x</button></p> 
            <p className='DashSubText'>{item.parent_first_name} {item.parent_last_name}</p>
          </div>
      })}
      <br/>
     
      </div>
       <Link to='/ecc/settings'><button className='DashButton'>Settings</button></Link>
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
