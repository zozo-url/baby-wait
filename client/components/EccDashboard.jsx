import React from 'react'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { getEccPendingData, getEccWaitlistData, deleteChildFromWaitlist } from "../apis/api"

class EccDashboard  extends React.Component{
  constructor() {
    super()
    this.state = { 
      currentUser: 1,
      pendingValue: [],
      waitlistValue: [],
    }
    this.deleteThisChild=this.deleteThisChild.bind(this)
    // this.getEccPendingData=this.getEccPendingData.bind(this)
    // this.getEccWaitlistData= this.getEccWaitlistData.bind(this)
    // this.deleteChildFromWaitlist=this. deleteChildFromWaitlist.bind(this)
  }
  componentWillMount() {
    // this.getEccPendingData(this.state.currentUser)
   
       getEccPendingData(1, (err,data) => {
           this.setState({pendingValue: data});
           
       });

       getEccWaitlistData(1,(err,data) => {
         this.setState({waitlistValue: data});
       })

      //  deleteChildFromWaitlist=()=>{
        
         
      //  }        
  }
  deleteThisChild (childId, eccId) {
    // const childId = this.state.childId.filter(item => item.childId !== childId)
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
     console.log('delete:', )
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
    data : state.ecc
  }
}

export default connect (mapStateToProps,actions)(EccDashboard);
