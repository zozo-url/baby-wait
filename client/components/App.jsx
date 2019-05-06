import React from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import { fetchEmoji, saveEmoji } from '../actions/emoji'
import Image from './Image'
import FilteredEmojiList from './FilteredEmojiList'

class App extends React.Component {
  componentDidMount () {
    console.log('fetch Emoji is a', typeof fetchEmoji())
    console.log('save Emoji is a', typeof saveEmoji())
    this.props.dispatch(fetchEmoji())
  }

  render () {
    return (
      <div>
        <h1>Choose an Emoji</h1>
        <Form/>
        <Image />
        <FilteredEmojiList />
      </div>
    )
  }
}

export default connect()(App)
