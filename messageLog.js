/**
 * 메시지로그를 조회합니다.
 * @module MessageLog
 */
'use strict'

const api = require('./requestApi.js')
const baseUrl = `https://solapi.com/MessageLog/3`

/**
 * 발송된 메시지를 조회합니다.
 * @param {object} 조회 옵션 [Syntax](https://docs.coolsms.co.kr/rest/getMessageLogList.html#request-syntax)
 */
module.exports.getSentMessages = function(params, callback) {
  api.request(
    `${baseUrl}/getSentMessages`,
    params,
    callback
  )
}
/**
 * 조회된 메시지 정보를 넘겨받을 콜백 함수
 * @callback getSentMessagesCallback
 * @param {string} error - 오류메시지
 * @param {object} result - 요청 결과(https://docs.coolsms.co.kr/rest/getMessageLogList.html#response-syntax)
 */

/**
 * API Key 및 API Secret 설정
 * @param {string} apiKey - API Key 입력
 * @param {string} apiSecret - API Secret 입력
 */
module.exports.setCredential = api.setCredential
