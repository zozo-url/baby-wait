import React from 'react';
import { connect } from 'react-redux'
// import currentPage from '../reducers/current-page'

import Footer from './components/Footer';
// import ParentRegister from './components/ParentRegister';
// import childRegister from './components/childRegister'






class app extends React.Component{
  render (){
    return (
      <div>
        {/* <childRegister />, */}
        {/* <ParentRegister />, */}
        <Footer />,
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