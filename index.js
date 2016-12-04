'use strict'

const rp = require('request-promise')
const API_ENDPOINT = 'https://mercury.postlight.com/parser?url='

class MercuryClient {
  constructor (apiKey) {
    this._apiKey = apiKey
  }

  parse (url) {
    return new Promise((resolve, reject) => {
      let opts = {
        url: API_ENDPOINT + encodeURIComponent(url),
        headers: {
          'x-api-key': this._apiKey
        }
      }
      rp(opts)
        .then((data) => {
          // Parse the JSON (like a gentleman).
          return resolve(JSON.parse(data))
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }
}

module.exports = MercuryClient
