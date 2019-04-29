import request from 'superagent'

export function getEmoji() {
  // Call the Emoji API
  return request.get('/api/emoji')
    // Process the response, and extract the data
    .then(res => res.body)
    // Handle an API error
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Emoji API troubles', err)
    })
}
