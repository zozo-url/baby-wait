import React from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom"


class  WaitlistApplication  extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render (){
  return(
    <div>
      <h1>Apply For This Waitlist</h1>
      <br/>
      <h3>Select child you want to enrol:</h3>
      <select>
        <option value="child1">child1name</option>
        <option value="child2">child2name</option>
      </select>
      <br/>
      <h3>or fill out this form:</h3>
      <form>
            <label htmlFor="">
            First name: <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} /> <br/>
            Last name: <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} /> <br/>
            Date of birth: <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} /> <br/>
            </label>
            <Link to='/parent/home'><input type="submit" value="Submit" /></Link>
            </form>
    </div>
  )
}

}
export default WaitlistApplication