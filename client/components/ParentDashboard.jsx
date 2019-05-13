import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};




class ParentDashboard  extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
componentWillMount(){
  this.setState({value: this.props.childList()})
}
  render (){ console.log(this.state)
  return(
    <div>
            <div className="padding"></div>
            <br/>
            <br/>
            <br/>

            <div className="main-container">
            <div className="header">
            <h1>PARENT DASHBOARD</h1>
            </div>
            

            <div className="small-container">
            <h2>LIST OF CHILDREN</h2>

            {this.state.value.payload[0].first_name}  
            {/* {this.state.value.payload.map(item =>
              <div>
            <li className='li'></li>
            <p key='id'>{item.first_name}</p>
            </div>
           )} */}
            <br/>
            <Link to='/parent/registerchild'><button>add child</button></Link> <br/>
             <br/>
       </div>
      
     <div className="small-container">

      <h2>LIST OF MY WAITLIST</h2>

      {this.state.value.payload.map(item =>
              <div>
            <li className='li'>
            Position: Accepted/Waiting
            <p>{item.status}</p>
            Day Care Center: 
             <p>{item.center_name}</p>
            Position in the list: 
              <p>{item.rank_ecc}</p>
              </li>
            </div>
        )}

        <br/>
      <Link to='/parent/filter'><button>search early childhood centers</button></Link>

     
      </div>
      
      </div>
      
 
  </div>
  )
}

}
const mapStateToProps = (state) => {
  return {
    data : state.Child
  }
}

// export const styles1 = withStyles(styles)(MediaCard)
export default connect (mapStateToProps,actions)(ParentDashboard);

