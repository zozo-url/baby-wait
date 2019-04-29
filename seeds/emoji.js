const emojiData = require('../data/emoji.json')

const data = Object.keys(emojiData).map(emojiName => ({
  name: emojiName,
  image_url: emojiData[emojiName]
}))

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('emoji').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('emoji').insert(data.slice(0, 400)),
        knex('emoji').insert(data.slice(400, 800))
      ])
    })
}
