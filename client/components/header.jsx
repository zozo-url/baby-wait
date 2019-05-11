import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

class header extends Component {



  render() {
    return (
      <AppBar
      position="fixed"
      style={{
          backgroundColor:'#2f2f2f', 
          boxShadow: 'none',
          padding: '10px 0px'
      }}
  >



  </AppBar>
    );
  }
}

export default header;