import React, { Component } from 'react';
import { BrowserRouter, Route }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

//MATERIAL UI IMPORTS



import Header from './components/header'


class App extends Component {
  constructor(props){
    super(props)
    this.state={value:[]} 
  
  }
  
  componentWillMount() {
    this.setState ({value: this.props.EccList()})
  }

  
  
  render() {
    
    return (
  
     
        <div>
        
          <div>
           
          {this.state.value.payload.map(item => (
            <div>
             <p>{item.center_name},</p> 
             
             <p>{item.email},</p> 

            </div>
            
          ) )
          }  
          </div>
      </div>

     



    );

 
  }
}

const mapStateToProps = (state) => {
  return {
    data : state.ECC
  }
}

export default connect(mapStateToProps,actions) (App);