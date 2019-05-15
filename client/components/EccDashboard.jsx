import React from 'react'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { getEccPendingData, getEccWaitlistData, deleteChildFromWaitlist } from "../apis/api"

class EccDashboard  extends React.Component{
  constructor() {
    super()
    this.state = { 
      pendingValue: [],
      waitlistValue: [],
    }
    this.deleteThisChild=this.deleteThisChild.bind(this)
  }
  componentWillMount() {
      getEccPendingData(this.props.currentUser, (err,data) => {
           this.setState({pendingValue: data});  
       });

       getEccWaitlistData(this.props.currentUser,(err,data) => {
         this.setState({waitlistValue: data});
       })
    // } else {
    //   this.props.history.push('/ecc/login')
    // }
  }
  deleteThisChild (childId, eccId) {
    deleteChildFromWaitlist(childId, eccId, (err, data)=> {
      if (err){
        console.log(err)
      }
      else {
        this.setState({
          waitlistValue: this.state.waitlistValue.filter(item => (item.child_id !== childId) || (item.ecc_id !== eccId)),
          pendingValue: this.state.pendingValue.filter(item => (item.child_id !== childId) || (item.ecc_id !== eccId))
        })
      }
    })
  }


  render () {
     console.log('pending: ', this.state.pendingValue)
     console.log('waitlist: ', this.state.waitlistValue)
     console.log('current user: ', this.props.currentUser)
  return (
    <div className='Dash'> 
      <br/>
      <br/>
      <br/>
      <div className="main-container">
      <div className="header"></div>
      <h1 className='DashHeader'>Your Pending Waitlist</h1>
      {this.state.pendingValue.map((item,id) => {
        return <div>
          <p key={id} className='DashText'>{item.child_rank} {item.child_first_name} {item.child_last_name}  <button className='' onClick={() => this.deleteThisChild(item.child_id, item.ecc_id)}>x</button></p> 
            <p className='DashSubText'>{item.parent_first_name} {item.parent_last_name}    {item.parent_email}</p>
        </div>
      })}
       </div>
              <div className="main-container">
            <h1 className='DashHeader'>Your Waitlist</h1>
             
             {this.state.waitlistValue.map((item,id) => {
        return <div>
            <p key={id} className='DashText'>
          {item.child_rank} {item.child_first_name} {item.child_last_name}  <button className='' onClick={() => this.deleteThisChild(item.child_id, item.ecc_id)}>x</button></p> 
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
    data : state.ecc,
    currentUser: state.user.currentUser
  }
}

export default connect (mapStateToProps,actions)(EccDashboard);
