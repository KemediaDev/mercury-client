const axios = require('axios')
const striptags = require('striptags')
const Entities = require('html-entities').AllHtmlEntities
const entities = new Entities()

class MercuryClient {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error('No API key supplied in MercuryClient instantiation.')
    }
    this._apiKey = apiKey
  }

  async parse(url) {
    return axios
      .get(`https://mercury.postlight.com/parser?url=${encodeURIComponent(url)}`, {
        headers: {
          'x-api-key': this._apiKey,
        },
      })
      .then(rsp => {
        const { data } = rsp
        data.title = get(data, 'title', false).trim()
        data.cleanContent = entities
          .decode(striptags(data.content || ''))
          .replace(/[\n|\r]+/g, ' ')
          .trim()
        return data
      })
  }
}

module.exports = MercuryClient
