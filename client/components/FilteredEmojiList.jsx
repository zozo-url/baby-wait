import React from 'react'
import { connect } from 'react-redux'

class FilteredEmojiList extends React.Component {
  render () {
    return (
      <div>
        <ul style={{ listStyle: 'none' }}>
          {this.props.filteredEmoji.map(emoji => {
            return (
              <li key={emoji.id}>
                {emoji.name.toUpperCase()}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    filteredEmoji: state.filteredEmoji
  }
}

export default connect(mapStateToProps)(FilteredEmojiList)
