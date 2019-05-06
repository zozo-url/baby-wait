import { SAVE_EMOJI } from '../actions/emoji'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_EMOJI:
      console.log('7 Redux has the emoji')
      return action.emoji
    default:
      return state
  }
}

export default reducer
