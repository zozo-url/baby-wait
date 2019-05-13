import React, { Component } from 'react';
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

//MATERIAL UI IMPORTS



import Header from './components/header'
import ParentRegister from './components/ParentRegister'
import ParentLogin from './components/ParentLogin'
import WaitlistApplication from './components/WaitlistApplication';
class App extends Component {
  render() {
    
    return (
    <Router>
      <div>
        <Route path="/" component={Header}/>
        <Route exact path="/" component={ParentRegister}/>
        <Route path="/login" component={ParentLogin}/>
        <Route path="/waitlist/apply" component={WaitlistApplication}/>
        
      </div>
      </Router>
    );

 
  }
}

// const mapStateToProps = (state) => {
//   return {
//     data : state.ECC
//   }
// }

// export default connect(mapStateToProps,actions) (App);
export default App;