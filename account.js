/**
 * 계정정보를 조회합니다. 현재는 잔액정보만 가져올 수 있습니다.
 * @module Account
 */
'use strict'

const request = require('request');
const moment = require('moment-timezone')

let apiKey = null
let apiSecret = null
const uniqid = require('uniqid')
const HmacMD5 = require('crypto-js/hmac-md5')

/**
 * API Key 와 API Secret 을 설정한다.
 * @param {string} apiKey - API Key 입력
 * @param {string} apiSecret - API Secret 입력
 */
module.exports.setCredential = function(_apiKey, _apiSecret) {
  apiKey = _apiKey
  apiSecret = _apiSecret
}

/**
 * 잔액정보를 가져옵니다.
 * @param {getBalanceCallback} callback - 잔액정보를 가져온 뒤 호출되는 콜백 함수
 */
module.exports.getBalance = function(callback) {
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

/**
 * 잔액정보를 가져온 뒤 호출되는 콜백 함수
 * @callback getBalanceCallback
 * @param {string} error - 오류 메시지
 * @param {object} result - 잔액정보를 담은 오브젝트
 */
