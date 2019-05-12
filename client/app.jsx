import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom"

import Header from './components/header'
import ParentRegister from './components/ParentRegister'
import ParentLogin from './components/ParentLogin'
class app extends Component {
  render() {
    return (
    <Router>
      <div>
        <Route path="/" component={Header}/>
        <Route exact path="/" component={ParentRegister}/>
        <Route path="/login" component={ParentLogin}/>
        
      </div>
      </Router>
    );
  }
}

export default app;