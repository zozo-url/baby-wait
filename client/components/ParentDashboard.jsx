import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { getChildWaitlistData } from "../apis/api";


class ParentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      value: []
    };
  }
  componentWillMount() {
    // this.setState({value: this.props.childList()})
    // console.log("data: ", getChildWaitlistData(1));
    getChildWaitlistData(1, (err, data) => {
      this.setState({ value: data });
    });
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
        {/*             

            <div>
            <h2 className='DashHeader'>Children Signed Up</h2>
            <p className='DashText'>{this.state.value.payload[0].first_name}</p>
            <br/>
            <Link to='/parent/registerchild'><button clasName="DashButton">add child</button></Link> <br/>
             <br/>
       </div>
       */}
        <div>
          <h2 className="DashHeader">Waitlist</h2>
          <p className="DashText">
          {this.state.value.length > 0 ? this.state.value[0].first_name : ""}
          </p>
          {this.state.value.map(item => (
            <div>
              <p className="DashSubText">Day Care Center: {item.center_name}</p>
              <p className="DashSubText">Status: {item.status}</p>
              {item.status !== 'pending' ? <p className="DashSubText">Position: {item.rank_ecc}</p> : ""}
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

// export const styles1 = withStyles(styles)(MediaCard)
export default connect(
  mapStateToProps,
  actions
)(ParentDashboard);
