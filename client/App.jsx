import React, { Component } from 'react';
// import { connect } from 'react-redux'
import {HashRouter as Router,Route, Link } from 'react-router-dom';

import Header from './components/header';
import childRegister from './components/childRegister';
// import Home from './components/Homepage';
// import ECC from './components/EccList';
// import Footer from './components/Footer';
import ChildRegister from './components/ChildRegister';
// import Homepage from './components/Homepage';
// import EccDashboard from './components/EccDashboard';
// import EccList from "./components/EccList";
// import EccLogin from "./components/EccLogIn";
// import EccRegister from "./components/EccRegister";
// import EccSettings from './components/EccSettings';
// import FilterLocation from './components/FilterLocation';
// import location from "./components/location";
// import nav from './components/nav';
// import ParentLogin from './components/ParentLogin';
// import ParentRegister from './components/ParentRegister';
// import WaitlistApplication from './components/WaitlistApplication';




class App extends React.Component {
  render() {
    
    return (
      <Router>
      <div>

        <Header/>
        <childRegister/>
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

