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

import EccDashboard from './EccDashboard'

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
        <Route path="/ecc/home" component={EccDashboard}/>
      </div>
    </Router>
    );

 
  }
}   
      
export default App
