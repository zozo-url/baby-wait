import React, { Component } from 'react';
import { HashRouter, Route, Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

//MATERIAL UI IMPORTS



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

const mapStateToProps = (state) => {
  return {
    data : state.ECC
  }
}

export default connect(mapStateToProps,actions) (App);