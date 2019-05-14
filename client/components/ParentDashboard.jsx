import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { getChildWaitlistData, deleteChildFromWaitlist } from "../apis/api";


class ParentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: 1,
      value: []
    };
    this.deleteThisChild=this.deleteThisChild.bind(this)
  }
  componentWillMount() {
    getChildWaitlistData(this.state.currentUser, (err, data) => {
      this.setState({ value: data });
    });
  }
  
  deleteThisChild (childId, eccId) {
    deleteChildFromWaitlist(childId, eccId, (err, data)=> {
      if (err){
        console.log(err)
      }
      else {
        this.setState({
          value: this.state.value.filter(item => (item.child_id !== childId) || (item.ecc_id !== eccId))
        })
      }
    })
  } 

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="padding" />
        <br />
        <br />
        <br />

        <div>
          <h2 className="DashHeader">PARENT DASHBOARD</h2>
        </div>
        <div>
          <h2 className="DashHeader">Waitlist</h2>
          <p className="DashText">
          {this.state.value.length > 0 ? this.state.value[0].first_name : ""}
          </p>
          {this.state.value.map((item, id) => (
            <div id={id}>
              <p className="DashSubText">Day Care Center: {item.center_name}  <button className='' onClick={() => this.deleteThisChild(item.child_id, item.ecc_id)}>x</button></p>
              <p className="DashSubText">Status: {item.status} </p>
              {item.status !== 'pending' ? <p className="DashSubText">Position: {item.rank_ecc}</p> : ""}
              <br/>
            </div>
          ))}

          <br />
          <Link to="/parent/filter">
            <button className="DashButton">
              search early childhood center
            </button>
          </Link>
          <Link to = "/parent/registerchild">
          <button className="DashButton">
            add child
          </button>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.Child
  };
};

export default connect(
  mapStateToProps,
  actions
)(ParentDashboard);
