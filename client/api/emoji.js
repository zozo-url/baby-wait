import request from 'superagent'

export function getEmoji() {
  // Call the Emoji API
  console.log('3 API client is working')
  return request
    .get('/api/emoji')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibWVzc2FnZSI6IkhpIHRoZXJlIiwiaWF0IjoxNTU2NjY0MjI0LCJleHAiOjE1NTY3NTA2MjR9.Rnu0ZN_vBfdmpPxPlJYnWYyfinbMHGNRRvVcjQ9y9HM')
    // Process the response, and extract the data
    .then(res => {
      console.log('4 API response: ', res.body)
      return res.body
    })
    // Handle an API error
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Emoji API troubles', err)
    })
}
