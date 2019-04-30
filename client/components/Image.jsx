import React from 'react'
import { connect } from 'react-redux'

class Image extends React.Component {
  render () {
    return (
      this.props.selectedImage && <img src={this.props.selectedImage}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    selectedImage: state.selectedImage
  }
}

export default connect(mapStateToProps)(Image)
