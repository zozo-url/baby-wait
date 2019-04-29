import { combineReducers } from 'redux'

import emoji from './emoji'
import filteredEmoji from './filteredEmoji'

const reducers = combineReducers({
  emoji,
  filteredEmoji
})

export default reducers
