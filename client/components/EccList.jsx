import React from 'react'
import { Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'


// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class  EccList  extends React.Component{

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
    data : state.ecc
  }
}


// export const styles1 = withStyles(styles)(MediaCard)
export default connect (mapStateToProps,actions)(EccList);
