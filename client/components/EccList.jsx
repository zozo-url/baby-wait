import React from 'react'
import { Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import { selectEcc } from '../actions'



class  EccList  extends React.Component{
  componentDidMount() {
    if(!this.props.currentUser) 
      this.props.history.push('/parent/login')
    }
  
    handleClick (id) {
    console.log('this is id', id)
      this.props.getEccId(id)
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

        {this.props.data.ecc.map((item, index) => 
        <div key={index}>
          <h4>{item.center_name}</h4>
          <p>Address: {item.address}, {item.suburb}</p>
          <p>{item.description}</p>
          <Link to={'/parent/registerwaitlist/'}><button onClick={() => this.handleClick(item.id)}>I want to register for this ecc</button></Link>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getEccId: (id) => dispatch(selectEcc(id))
  }
}


export default connect (mapStateToProps,mapDispatchToProps)(EccList);
