import React from 'react'
import { connect } from 'react-redux'

import { filterEmoji, saveEmoji } from '../actions/emoji'

class Form extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this)
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
      <form>
        <input type="text" name="query" onChange={this.handleChange} />
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    emoji: state.emoji
  }
}

export default connect(mapStateToProps)(Form)
