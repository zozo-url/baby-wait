import { getEmoji } from '../api/emoji'

export const SAVE_EMOJI = 'SAVE_EMOJI'

export function saveEmoji (emoji) {
  return {
    type: SAVE_EMOJI,
    emoji
  }
}

export function fetchEmoji () {
  return dispatch => {
    getEmoji()
      .then(emoji => {
        dispatch(saveEmoji(emoji))
      })
  }
}
