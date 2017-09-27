/**
 * 한번의 요청으로 메시지를 발송합니다.
 * @module SimpleMessage
 */
'use strict'

const baseUrl = 'https://solapi.com/SimpleMessage/3'
const api = require('./requestApi.js')

/**
 * 한번의 요청으로 메시지를 발송합니다.
 * @param {object} params - 발송할 메시지 데이터 [Syntax](https://docs.coolsms.co.kr/rest/simple-message.html#request-syntax)
 */
module.exports.sendMessages = function(params, callback) {
  let groupOptions = {
    "appId": null,
    "osPlatform": "NodeJS",
    "devLanguage": "NodeJS",
    "sdkVersion": "JS",
    "appVersion": null,
    "siteUser": "__private__",
    "mode": "real",
    "forceSms": "false",
    "onlyAta": "false"
  };

  params.groupOptions = Object.assign(groupOptions, params.options);

  api.request(
    `${baseUrl}/sendMessages`,
    params,
    callback
  )
}

/**
 * API Key 및 API Secret 설정
 * @param {string} apiKey - API Key 입력
 * @param {string} apiSecret - API Secret 입력
 */
module.exports.setCredential = api.setCredential
