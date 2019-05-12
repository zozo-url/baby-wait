import React from 'react';
import { connect } from 'react-redux'
// import currentPage from '../reducers/current-page'

<<<<<<< HEAD
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
=======
import Header from './components/header'

class app extends Component {
  render() {
    return (
      <div>
        <Header/>
        hello
>>>>>>> 51d6d00a3cbc5f546ed3d53d861b571f81725e88
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