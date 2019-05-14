import React from 'react'
import { Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'



class  EccList  extends React.Component{
  constructor(){
    super()
    this.state={

    }
    this.sortThroughList = this.sortThroughList.bind(this)
  }

  componentDidMount() {
    const myVar = this.props.EccList()
    this.sortThroughList(myVar)
  }

  sortThroughList (something) {
    const anotherVar = something.payload.filter(daycare => daycare.suburb == this.props.data.filterWord)
    this.props.filteredList(anotherVar.map(item => item))
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
      {this.props.data.filteredList.map((item, index) => <p key={index}>{item.center_name}</p>)}
      </div>
        <Link to='/parent/registerwaitlist'><button>I want to register for this ecc</button></Link> <br/>
        <Link to='/parent/home'><button>back to parent dashboard</button></Link>
    </div>

  )
  
}

}


const mapStateToProps = (state) => {
  return {
    data : state.ecc
  }
}


// export const styles1 = withStyles(styles)(MediaCard)
export default connect (mapStateToProps,actions)(EccList);
