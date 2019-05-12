import React, { Component } from 'react';
import { BrowserRouter, Route }  from 'react-router-dom'

import * as actions from './Actions'






import Header from './components/header'
import Home from './components/Homepage';
import ECC from './components/EccList';




class App extends Component {




  render() {
    
    return (
      <div>




        <Header/>

        <BrowserRouter>
        <div>
              <Route path="/Home" component={Home}/>
              <Route path="/ECC" component={ECC}/>
       </div>
        </BrowserRouter>
        
      </div>
    );
  }
}



export default App;