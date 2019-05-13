import React, { Component } from 'react';
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

//MATERIAL UI IMPORTS



import Header from './Header'
import ParentRegister from './ParentRegister'
import ParentLogin from './ParentLogin'
import ParentDashboard from './ParentDashboard'
import ChildRegister from './ChildRegister';
import EccList from './EccList';
import FilterLocation from './FilterLocation'
import WaitlistApplication from './WaitlistApplication'
class App extends React.Component {
  render() {
    
    return (
    <Router>
      <div>
        <Route path="/" component={Header}/>
        <Route exact path="/" component={ParentRegister}/>
        <Route path="/login" component={ParentLogin}/>
        <Route path="/parent/home" component={ParentDashboard}/>
        <Route path="/parent/registerchild" component={ChildRegister}/>
        <Route path="/parent/filter" component={FilterLocation}/>
        <Route path="/parent/ecclist" component={EccList}/>
        <Route path="/parent/registerwaitlist" component={WaitlistApplication}/>
      </div>
    </Router>
    );

 
  }
}   
      //  {/* <Route path="/"component= {header}/> */}
      // {/* <Route path="/ChildRegister"component= {ChildRegister}/>
      // <Route path="/Homepage"component= {Homepage}/>
      // <Route path="/EccDashboard"component= {EccDashboard}/>
      // <Route path="/EccList"component= {EccList}/>
      // <Route path="/EccLogin"component= {EccLogin}/>
      // <Route path="/EccRegister"component= {EccRegister}/>
      // <Route path="/EccSetterings"component= {EccSettings}/>
      // <Route path="/FilterLocation"component= {FliterLocation}/>
      // <Route path="/"component= {Footer}/>
      // <Route path="/location"component= {location}/>
      // <Route path="/nav"component= {nav}/>
      // <Route path="/ParentLogin"component= {ParentLogin}/>
      // <Route path="/ParentRegister"component= {ParentRegister}/>
      // <Route path="/WaitlistApplication"component= {WaitlistApplication}/> */}
export default App
// const mapStateToProps = (state) => {
//   return {
//     data : state.ECC
//   }
// }

// export default connect(mapStateToProps,actions) (App);