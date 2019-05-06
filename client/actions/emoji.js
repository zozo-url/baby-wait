import { getEmoji } from '../api/emoji'

export const FILTER_EMOJI = 'FILTER_EMOJI'
export const SAVE_EMOJI = 'SAVE_EMOJI'
export const SELECT_IMAGE = 'SELECT_IMAGE'

export function filterEmoji (query) {
  return {
    type: FILTER_EMOJI,
    query
  }
}

export function saveEmoji (emoji) {
  console.log('6 Dispatching the emoji to redux')
  return {
    type: SAVE_EMOJI,
    emoji
  }
}

export function fetchEmoji () {
  // Console log anything BEFORE calling the API
  console.log('1 Dispatching the action')

  return function (dispatch) {
    // Console log anything BEFORE calling the API
    console.log('2 Thunk is running the action')

    getEmoji()
      .then(emoji => {
        // Console log anything AFTER calling the API
        console.log('5 Got the Emoji!: ', emoji)

        dispatch(saveEmoji(emoji))
      })
  }
}

export function selectImage(imageUrl) {
  return {
    type: SELECT_IMAGE,
    imageUrl
  }
}
