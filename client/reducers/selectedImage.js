import { SELECT_IMAGE } from '../actions/emoji'

const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_IMAGE:
      return action.imageUrl
    default:
      return state
  }
}

export default reducer
