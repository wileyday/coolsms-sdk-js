/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const moment = require('moment')
const uniqid = require('uniqid')
const request = require('request')
const HmacSHA256 = require('crypto-js/hmac-sha256')

const algorithm = 'HMAC-SHA256'
let publicKey = null
let secretKey = null

function setCredential(apiKey, apiSecret) {
  publicKey = apiKey
  secretKey = apiSecret
}

function requestApi(url, parameters, callback) {
  const date = moment.utc().format();
  const salt = uniqid();
  const hmacData = date + salt;
  const signature = HmacSHA256(hmacData, secretKey).toString();

  request(
    {
      url: url,
      method: 'post',
      headers: {
        'Authorization': `${algorithm} ApiKey=${publicKey}, Date=${date}, Salt=${salt}, Signature=${signature}`
      },
      json: parameters
    },
    function (error, response, body) {
      if (error) {
          return callback(error)
      }
      if (response.statusCode != 200) {
        return callback(body)
      }
      if (!error && response.statusCode == 200) {
        callback(error, body)
      }
    }
  )
}

module.exports = {
  request: requestApi,
  setCredential: setCredential
}
