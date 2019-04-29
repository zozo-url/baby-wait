import { SAVE_EMOJI, FILTER_EMOJI } from '../actions/emoji'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_EMOJI:
      return action.emoji
    case FILTER_EMOJI:
      return state.filter(emoji => emoji.name.includes(action.query))
    default:
      return state
  }
}

export default reducer
