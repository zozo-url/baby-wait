import React from 'react'
import { connect } from 'react-redux'

import { filterEmoji, saveEmoji, selectImage } from '../actions/emoji'

class Form extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()

    this.props.dispatch(selectImage(this.props.filteredEmoji[0].image_url))
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })

    if (event.target.value.length < this.state.query.length) {
      this.props.dispatch(saveEmoji(this.props.emoji))
    }

    if (event.target.value.length > 2) {
      this.props.dispatch(filterEmoji(event.target.value))
    }
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="query" autoComplete="off" onChange={this.handleChange} />
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    emoji: state.emoji,
    filteredEmoji: state.filteredEmoji
  }
}

export default connect(mapStateToProps)(Form)
