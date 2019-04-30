import { combineReducers } from 'redux'

import emoji from './emoji'
import filteredEmoji from './filteredEmoji'
import selectedImage from './selectedImage'

const reducers = combineReducers({
  emoji,
  filteredEmoji,
  selectedImage
})

export default reducers
