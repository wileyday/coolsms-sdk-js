/**
 * Coolsms SDK for Javascript
 * @module coolsms-sdk
 */
'use strict'

/**
 * 심플메시지 모듈을 리턴합니다.
 * @returns {SimpleMessage} 심플메시지 모듈
 */
module.exports.SimpleMessage = function() {
  return require('./simpleMessage.js')
}

/**
 * 그룹메시지 모듈을 리턴합니다.
 * @returns {GroupMessage} 그룹메시지 모듈 
 */
module.exports.GroupMessage = function() {
  return require('./groupMessage.js')
}

/**
 * 회원정보 모듈을 리턴합니다.
 * @returns {Account} 회원정보 모듈
 */
module.exports.Account = function() {
  return require('./account.js')
}

/**
 * 메시지로그 모듈을 리턴합니다.
 * @returns {MessageLog} 메시지로그 모듈
 */
module.exports.MessageLog = function() {
  return require('./messageLog.js')
}


/**
 * 이미지관리 모듈을 리턴합니다.
 * @returns {Images} 이미지관리 모듈
 */
module.exports.Images = function() {
  return require('./images.js')
}

/**
 * 예약메시지관리 모듈을 리턴합니다.
 */
module.exports.ScheduledMessage = function() {
  return require('./scheduledMessage.js')
}
