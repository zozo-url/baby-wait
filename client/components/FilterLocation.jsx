import React from 'react'
import { Link } from "react-router-dom"
import { setFilterEccWord } from '../actions';
import { connect } from 'react-redux'
import { fetchECCList } from '../actions'


class  FilterLocation  extends React.Component{
  constructor(props){
    super(props)
    this.state = {
          selectedLocation: ''
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
  

  render (){
  return(
    <div>
      <br/>
      <br/>
      <br/>
      <h1>Location filter</h1>
      <select name="Locations" onChange={this.handleChange}>
        <option value=""></option>
        <option value="Te Aro">Te Aro</option>
        <option value="Brooklyn">Brooklyn</option>
      </select>
      <Link to='/parent/ecclist'><button className="DashButton" onClick={this.handleSubmit}>go to ecc list</button></Link>
    
    </div>
    
  )
}

}

//       <div id="region-list"><ul>  <li class="region-home"><a href="/know-your-region"><span class="regionName">Know Your Region Home</span></a></li>  <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=1" class=""><span class="regionName">Northland Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=2" class=""><span class="regionName">Auckland Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=3" class=""><span class="regionName">Waikato Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=4"><span class="regionName">Bay of Plenty Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=5"><span class="regionName">Gisborne Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=6" class=""><span class="regionName">Hawke's Bay Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=7"><span class="regionName">Taranaki Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=8" class=""><span class="regionName">Manawatu-Wanganui Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=9" class=""><span class="regionName">Wellington Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=16" class=""><span class="regionName">Tasman Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=17"><span class="regionName">Nelson Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=18" class=""><span class="regionName">Marlborough Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=12" class=""><span class="regionName">West Coast Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=13"><span class="regionName">Canterbury Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=14"><span class="regionName">Otago Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=15"><span class="regionName">Southland Region</span><span class="regionKML"></span></a></li>
// <li><a href="https://www.educationcounts.govt.nz/know-your-region/region/region-summary?region=19" class=""><span class="regionName">Chatham Islands County</span><span class="regionKML"></span></a></li>

// </ul>
//   </div>

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterEccWord: (suburbToFilterBy) => dispatch(setFilterEccWord(suburbToFilterBy)),
    setEccData: (filterWord) => dispatch(fetchECCList(filterWord))
  }
}

export default connect(null, mapDispatchToProps) (FilterLocation)