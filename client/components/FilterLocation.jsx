import React from 'react'
import { Link } from "react-router-dom"
import { setFilterEccWord } from '../actions';
import { connect } from 'react-redux'
import { fetchECCList } from '../actions'
import { getEccSuburbs } from '../apis/api'


class  FilterLocation  extends React.Component{
  constructor(props){
    super(props)
    this.state = {
          selectedLocation: '',
          suburbs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      selectedLocation: event.target.value
    })
  }
  
  handleSubmit () {
    this.props.setFilterEccWord(this.state.selectedLocation)
    this.props.setEccData(this.state.selectedLocation)
  }
  
  componentDidMount () {
       getEccSuburbs((err, res) => {
        this.setState({
          suburbs: [...new Set(res)]
        })
      })
  }

  render (){
    console.log('suburbs: ', this.state.suburbs)
  return(
    <div>
      <br/>
      <br/>
      <br/>
      <h1>Location filter</h1>
      <select name="Locations" onChange={this.handleChange} style ={{
          display: 'block',
      }}>
        <option value=' '>Select A Suburb</option>
        {this.state.suburbs.map((suburb, index) => <option key={index} value={suburb}>{suburb}</option>)}
      </select>
      <Link to='/parent/ecclist'><button className="DashButton" onClick={this.handleSubmit}>go to ecc list</button></Link>
    
    </div>
    
  )
}

}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterEccWord: (suburbToFilterBy) => dispatch(setFilterEccWord(suburbToFilterBy)),
    setEccData: (filterWord) => dispatch(fetchECCList(filterWord))
  }
}

export default connect(null, mapDispatchToProps) (FilterLocation)