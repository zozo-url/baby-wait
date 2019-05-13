import React, { Component } from 'react';
import { HashRouter, Router, Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

//MATERIAL UI IMPORTS



import Header from './components/header'
import ParentRegister from './components/ParentRegister'
import ParentLogin from './components/ParentLogin'

    // <Router>
    //   <div>
    //     <Route path="/" component={Header}/>
    //     <Route exact path="/" component={ParentRegister}/>
    //     <Route path="/login" component={ParentLogin}/>
        
    //   </div>
    //   </Router>
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