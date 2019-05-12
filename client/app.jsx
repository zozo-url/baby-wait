import React, { Component } from 'react';

import Header from './components/header'
import ParentRegister from './components/ParentRegister'
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