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
  constructor(){
    super()
    this.state={

    }
  }

  componentWillMount() {
    this.setState ({value: this.props.EccList()})
  }

  render (){
    console.log('this.props: ', this.props)
  return(


 
    <div>
     
      <br/>
      <br/>
      <br/>
      <div>
      Hello
      </div>
        {/* <h1>I am a list of eccs</h1>

           
            <div>
              <div>
                    {this.state.value.payload.map(item => (
                     <div>
                       <ul>
                          <li>
                          <p>{item.center_name}</p> 
                          <p>{item.email}</p> 
                          </li>
                        </ul>
                     </div>
                           ))
                     }  
                </div>
              </div> */}
        
        
        
        
        <Link to='/parent/registerwaitlist'><button>I want to register for this ecc</button></Link> <br/>
        <Link to='/parent/home'><button>back to parent dashboard</button></Link>
    </div>






  )
  
}




}

// function MediaCard(props) {
//   const { classes } = props;
//   return (
//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }



const mapStateToProps = (state) => {
  return {
    data : state.ECC,
    filteredList : state.filteredList
  }
}

// export const styles1 = withStyles(styles)(MediaCard)
export default connect (mapStateToProps,actions)(EccList);
