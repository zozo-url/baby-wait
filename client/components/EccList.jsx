import React from 'react'
import { Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'



class  EccList  extends React.Component{
  componentDidMount() {
    if(!this.props.currentUser) 
      this.props.history.push('/parent/login')
    }

  render (){
    console.log('this.props.data: ', this.props.data)
  return(
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
        <Link to={'/parent/registerwaitlist/' + 17}><button>I want to register for this ecc</button></Link>
        {this.props.data.ecc.map((item, index) => 
        <div key={index}>
          <h4>{item.center_name}</h4>
          <p>Address: {item.address}, {item.suburb}</p>
          <p>{item.description}</p>
          <Link to={'/parent/registerwaitlist/' + item.id}><button>I want to register for this ecc</button></Link>
        </div>)}
        </div>
           <br/>
          <Link to='/parent/home'><button>back to parent dashboard</button></Link>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    data : state.ecc,
    currentUser: state.user.currentUser
  }
}


// export const styles1 = withStyles(styles)(MediaCard)
export default connect (mapStateToProps,actions)(EccList);
