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
      <h1></h1>
      <br/>
      <br/>
      <h1></h1>
      <h1>parent dashboard</h1>
      <p>list of children</p>
      <li>child1</li>
      <li>child2</li>
      <Link to='/parent/registerchild'><button>add child</button></Link> <br/>
      <br/>
      <p>list of my waitlists</p>
        <li>child 1 = ecc 1</li>
        <li>child 1 = ecc 2</li>
        <li>child 2 = ecc 1</li> 
        <br/>
      <Link to='/parent/filter'><button>search early childhood centers</button></Link>
  </div>
  )
}

}
export default ParentDashboard;