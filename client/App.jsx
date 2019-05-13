import React, { Component } from 'react';
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

//MATERIAL UI IMPORTS



import Header from './components/header'
import ParentRegister from './components/ParentRegister'
import ParentLogin from './components/ParentLogin'
class App extends React.Component {
  render() {
    
    return (
    <Router>
      <div>
        <Route path="/" component={Header}/>
        <Route exact path="/" component={ParentRegister}/>
        <Route path="/login" component={ParentLogin}/>
              {/* <Route path="/"component= {header}/> */}
      {/* <Route path="/ChildRegister"component= {ChildRegister}/>
      <Route path="/Homepage"component= {Homepage}/>
      <Route path="/EccDashboard"component= {EccDashboard}/>
      <Route path="/EccList"component= {EccList}/>
      <Route path="/EccLogin"component= {EccLogin}/>
      <Route path="/EccRegister"component= {EccRegister}/>
      <Route path="/EccSetterings"component= {EccSettings}/>
      <Route path="/FilterLocation"component= {FliterLocation}/>
      <Route path="/"component= {Footer}/>
      <Route path="/location"component= {location}/>
      <Route path="/nav"component= {nav}/>
      <Route path="/ParentLogin"component= {ParentLogin}/>
      <Route path="/ParentRegister"component= {ParentRegister}/>
      <Route path="/WaitlistApplication"component= {WaitlistApplication}/> */}

    
      </div>
      </Router>
    );

 
  }
}
export default App
// const mapStateToProps = (state) => {
//   return {
//     data : state.ECC
//   }
// }

// export default connect(mapStateToProps,actions) (App);