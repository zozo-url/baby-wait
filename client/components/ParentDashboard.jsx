import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { getChildWaitlistData, deleteChildFromWaitlist } from "../apis/api";
import { thisTypeAnnotation } from "@babel/types";


class ParentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      value: []
    };
    this.deleteThisChild=this.deleteThisChild.bind(this)
  }

  componentDidMount() {
    if(this.props.currentUser) {
      getChildWaitlistData(this.props.currentUser, (err, data) => {
        this.setState({ value: data });
      });
    } else {
      this.props.history.push('/parent/login')
    }
  }

  
  deleteThisChild (childId, eccId) {
    deleteChildFromWaitlist(childId, eccId, (err, data)=> {
      if (err){
        console.log(err)
      }
      else {
        this.
        setState({
          value: this.state.value.filter(item => (item.id !== childId) || (item.ecc_id !== eccId))
        })
      }
    })
  } 

  render() {
    console.log(this.state.value);
     console.log('current user: ', this.props.currentUser)
     return (
      <div>
        <div className="padding"/>
        <br />
        <br />
        <br />
        <div>
          <h2 className="DashHeader">PARENT DASHBOARD</h2>
        </div>
        <div>
          <h2 className="DashHeader">Waitlist</h2>
          {!this.state.value[0] ? <p className="DashSubText">You have no children registered.</p> : 
          <div>
            {this.state.value.map((item, index) => (
                <div>
                      <p className="DashText">{item.first_name}</p>
                  {item.waitlists.map((item2, id) => (
                      <div id={id}>
                          <p className="DashSubText">Day Care Center: {item2.ecc_name}  <button className='' onClick={() => this.deleteThisChild(item2.child_id, item2.ecc_id)}>x</button></p>
                          <p className="DashSubText">Status: {item2.status} </p>
                          {item2.status !== 'pending' ? <p className="DashSubText">Position: {item2.rank_ecc}</p> : ""}
                          <br/>
                      </div>
                  ))}
                </div>
              ))}
            </div>  
            }
            </div>
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
    )
  }
}
const mapStateToProps = state => {
  return {
    data: state.Child,
    currentUser: state.user.currentUser
  };
};

export default connect(
  mapStateToProps,
  actions
)(ParentDashboard);
