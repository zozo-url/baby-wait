import React from 'react';
import { connect } from 'react-redux'
// import currentPage from '../reducers/current-page'

import Header from './components/header'
import Footer from './components/Footer';

class app extends Component {
  render() {
    return (
      <div>
        <Header/>

        <Footer />,
        hello
      </div>
    );
  }
      
}


export default app

// const mapStateToProps = (state) =>{
//   return {
//     currentPage: state.currentPage
//   }




// export default connect(
//   mapStateToProps)(app)