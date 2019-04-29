import { SAVE_EMOJI } from '../actions/emoji'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_EMOJI:
      return action.emoji
    default:
      return state
  }
}

export default reducer
