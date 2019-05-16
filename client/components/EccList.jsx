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
      <div className="Dash">
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 className="DashHeader">Early Childhood Centers</h2>
        <br/>
        <div className="DashForm">
        <br/>
        <Link to='/parent/home'><button className='EccButton'>Back to parent dashboard</button></Link>
        {this.props.data.ecc.map((item, index) => 
        <div key={index}>
          <h4 className="DashText">{item.center_name}</h4>
          <p className="EccSubText">Address: {item.address}, {item.suburb}</p>
          <p className="EccSubText">{item.description}</p>
          <br/>
          <Link to={'/parent/registerwaitlist/'}><button className='EccButton' onClick={() => this.handleClick(item.id)}>Join waitlist</button></Link>
        </div>)}
        </div>
           <br/>
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
