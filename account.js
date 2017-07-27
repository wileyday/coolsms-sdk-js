/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const request = require('request');
const moment = require('moment-timezone')

let apiKey = null
let apiSecret = null
const uniqid = require('uniqid')
const HmacMD5 = require('crypto-js/hmac-md5')

function setCredential(_apiKey, _apiSecret) {
  apiKey = _apiKey
  apiSecret = _apiSecret
}

function getBalance(callback) {
  const url = `https://api.coolsms.co.kr/sms/2/balance`
  const salt = uniqid()
  const timestamp = moment().tz('Asia/Seoul').unix()
  const hmacData = timestamp + salt
  const signature = HmacMD5(hmacData, apiSecret).toString()
  const request_url = `${url}?api_key=${apiKey}&timestamp=${timestamp}&salt=${salt}&signature=${signature}`

  request(
    {
      url: request_url,
      method: 'get'
    },
    function (error, response, body) {
      if (error) {
          console.log(error)
      }
      if (!error && response.statusCode == 200) {
        callback(error, body)
      }
    }
  )
}

module.exports.setCredential = setCredential
module.exports.getBalance = getBalance
