import React, { Component } from 'react';

import Header from './components/header'
import ParentRegister from './components/ParentRegister'
import ParentLogin from './components/ParentLogin'
class app extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ParentRegister />
      </div>
    );
  }
}

export default app;