import React from 'react'
import { connect } from 'react-redux'

import { fetchEmoji } from '../actions/emoji'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchEmoji())
  }

  render () {
    return (
      <div>
        <h1>React is up and running.</h1>
      </div>
    )
  }
}

export default connect()(App)
