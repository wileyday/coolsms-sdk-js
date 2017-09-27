/**
 * 예약된 메시지를 관리합니다.
 * @module ScheduledMessage
 */
'use strict'

const api = require('./requestApi.js')
const baseUrl = 'https://solapi.com/ScheduledMessage/3'

/**
 * 예약된 메시지 조회
 * @param {getScheduledMessagesCallback} callback - 조회결과를 넘겨받을 콜백 함수
 */
module.exports.getScheduledMessages = function(callback) {
  api.request(
    `${baseUrl}/getMessages`,
    {},
    callback
  )
}
/**
 * 조회결과를 넘겨받을 콜백 함수
 * @callback getScheduledMessagesCallback
 * @param {string} error - 오류메시지
 * @param {object} result - [요청 결과](https://docs.coolsms.co.kr/rest/scheduled-message/getScheduledMessages.html#response-syntax)
 */

/**
 * 예약메시지를 취소합니다.
 * @param {array} messages - 취소할 예약메시지 목록 [Syntax](https://docs.coolsms.co.kr/rest/scheduled-message/cancelScheduledMessages.html#request-syntax)
 * @param {cancelScheduledMessagesCallback} callback - 취소 결과를 넘겨받을 콜백 함수
 */
module.exports.cancelScheduledMessages = function(messages, callback) {
  api.request(
    `${baseUrl}/cancelMessages`,
    { messages: messages },
    callback
  )
}
/**
 * 취소 결과를 넘겨받을 콜백 함수
 * @callback cancelScheduledMessagesCallback
 * @param {string} error - 오류메시지
 * @param {object} result - [요청 결과](https://docs.coolsms.co.kr/rest/scheduled-message/cancelScheduledMessages.html#response-syntax)
 */

/**
 * API Key 및 API Secret 설정
 * @param {string} apiKey - API Key 입력
 * @param {string} apiSecret - API Secret 입력
 */
module.exports.setCredential = api.setCredential
