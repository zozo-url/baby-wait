import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


class ParentDashboard  extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }

  render (){
  return(
    <div>
      <div className="padding">
      <header></header>
      </div>
      <br/>
      <div className="main-container">
      <div className="header">
       <h1>PARENT DASHBOARD</h1>
      </div>
      <div className="small-container">
      
       <h2>LIST OF CHILDREN</h2>
      <li>child1</li>
      <li>child2</li>
      <Link to='/parent/registerchild'><button>add child</button></Link> <br/>
      <br/>
      
      </div>
     <div className="small-container">
      <h2>LIST OF MY WAITLIST</h2>
        <li>child 1 = ecc 1</li>
        <li>child 1 = ecc 2</li>
        <li>child 2 = ecc 1</li> 
        <br/>
      <Link to='/parent/filter'><button>search early childhood centers</button></Link>
      
      </div>
      
      </div>
      
  </div>
  )
}

}
export default ParentDashboard;