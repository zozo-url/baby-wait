import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './Actions'


//MATERIAL UI IMPORTS


import Header from './components/header'





class app extends Component {
  constructor(props){
    super(props)
    this.state={value:[]} 
    console.log(props)
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

export default connect(mapStateToProps,actions) (app);