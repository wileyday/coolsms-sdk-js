/**
 * 주어진 URL 로 요청하는 모듈입니다. 무조건 POST로 던집니다.
 * @module RequestApi
 */
'use strict'

const moment = require('moment')
const uniqid = require('uniqid')
const request = require('request')
const HmacSHA256 = require('crypto-js/hmac-sha256')

// HMAC-SHA256 인증 방식 사용
const algorithm = 'HMAC-SHA256'

let publicKey = null
let secretKey = null

/**
 * 요청 후 결과 받는 콜백 함수
 * @callback requestApiCallback
 * @param {string} error - 오류 메시지
 * @param {object} result - 요청 결과
 */

/**
 * 주어진 URL 로 POST 를 던집니다.
 * @param {string} url - URL 입력
 * @param {object} parameters - REQUEST 의 파라메터
 * @param {requestApi~requestApiCallback} - 콜백 함수
 */
module.exports.request = function(url, parameters, callback) {
  const date = moment.utc().format();
  const salt = uniqid();
  const hmacData = date + salt;
  const signature = HmacSHA256(hmacData, secretKey).toString();

  console.log('url', url)
  console.log('Authorization', `${algorithm} ApiKey=${publicKey}, Date=${date}, Salt=${salt}, Signature=${signature}`)

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

/**
 * Set api public and secret keys
 * @param {string} apiKey - api public key
 * @param {string} apiSecret - api secret key
 */
module.exports.setCredential = function(apiKey, apiSecret) {
  publicKey = apiKey
  secretKey = apiSecret
}
