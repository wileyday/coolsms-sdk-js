/**
 * 그룹메시지 발송을 위해 그룹생성, 삭제, 정보보기, 목록보기 등의 API를 제공합니다.
 * @module GroupMessage
 */
'use strict'

let domainName = 'https://solapi.com'
const basePath = '/GroupMessage/3'
const api = require('./requestApi.js')

/**
 * 도메인이름을 설정합니다.
 * @param {string} domainName - 변경할 도메인이름 (default: https://solapi.com)
 */
module.exports.setDomainName = function(_domainName) {
  domainName = _domainName
}

/**
 * 그룹을 생성합니다.
 * @param {object} groupOptions - 그룹 옵션을 입력합니다.
 * @param {createGroupCallback} callback - 그룹 생성 후 호출되는 콜백 함수
 */
module.exports.createGroup = function(options, callback) {
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

  groupOptions = Object.assign(groupOptions, options);

  api.request(
    `${domainName}${basePath}/createGroup`,
    { groupOptions: groupOptions },
    callback
  )
}

/**
 * 그룹 생성 후 호출되는 콜백 함수
 * @callback createGroupCallback
 * @param {string} error - 오류메시지
 * @param {object} result - [호출 결과](https://docs.coolsms.co.kr/rest/group-message/create-group.html#response-syntax)
 */


/**
 * 그룹에 메시지를 추가합니다.
 * @param {string} groupId - 메시지를 추가할 그룹아이디
 * @param {array} messages - 추가할 메시지의 목록
 */
module.exports.addMessages = function(groupId, messages, callback) {
  api.request(
    `${domainName}${basePath}/group/${groupId}/addMessages`,
    { messages: messages },
    callback
  )
}

/**
 * 메시지 추가 후 결과를 받는 콜백 함수
 * @callback addMessagesCallback
 * @param {string} error - 오류메시지
 * @param {object} result - [호출 결과](https://docs.coolsms.co.kr/rest/group-message/add-messages.html#response-syntax)
 */

/**
 * 그룹메시지를 삭제합니다.
 * @param {string} groupId - 메시지를 삭제할 그룹아이디
 * @param {array} messages - 삭제할 메시지의 목록
 * @param {deleteMessagesCallback} callback - 메시지 삭제 후 결과를 받는 콜백 함수
 */
module.exports.deleteMessages = function(groupId, messages, callback) {
  api.request(
    `${domainName}${basePath}/group/${groupId}/deleteMessages`,
    { messages: messages },
    callback
  )
}
/**
 * 메시지 삭제 후 결과를 받는 콜백 함수
 * @callback deleteMessagesCallback
 * @param {string} error - 오류메시지
 * @param {object} result - [호출 결과](https://docs.coolsms.co.kr/rest/group-message/delete-messages.html#response-syntax)
 */

/**
 * 그룹정보 가져오기
 * @param {string} groupId - 그룹정보를 가져올 그룹의 아이디
 * @param {getGroupInfoCallback} callback - 그룹정보를 넘겨받을 콜백 함수
 */
module.exports.getGroupInfo = function(groupId, callback) {
  api.request(
    `${domainName}${basePath}/group/${groupId}/getGroupInfo`,
    {},
    callback
  )
}
/**
 * 그룹정보를 넘겨받을 콜백 함수
 * @callback getGroupInfoCallback
 * @param {string} error - 오류메시지
 * @param {object} result - [호출 결과](https://docs.coolsms.co.kr/rest/group-message/get-group-info.html#response-syntax)
 */

/**
 * 그룹메시지 목록을 가져옵니다.
 * @param {string} groupId - 그룹메시지 목록을 가져올 그룹아이디
 * @param {getMessageListCallback} callback - 그룹메시지 목록을 넘겨받을 콜백 함수
 */
module.exports.getMessageList = function(groupId, callback) {
  api.request(
    `${domainName}${basePath}/group/${groupId}/getMessageList`,
    {},
    callback
  )
}
/**
 * 그룹메시지 목록을 넘겨받을 콜백 함수
 * @param {string} error - 오류메시지
 * @param {object} result - [호출 결과](https://docs.coolsms.co.kr/rest/group-message/get-message-list.html#response-syntax)
 */

/**
 * 그룹목록을 가져옵니다.
 * @param {getGroupListCallback} callback - 그룹목록을 넘겨받을 콜백 함수
 */
module.exports.getGroupList = function(callback) {
  api.request(
    `${domainName}${basePath}/getGroupList`,
    {},
    callback
  )
}
/**
 * 그룹목록을 넘겨받을 콜백 함수
 * @param {string} error - 오류메시지
 * @param {object} result - [호출 결과](https://docs.coolsms.co.kr/rest/group-message/get-group-list.html#response-syntax)
 */

/**
 * 그룹을 삭제합니다.
 * @param {array} groups - 삭제할 그룹의 목록
 * @param {deleteGroupsCallback} callback - 삭제 결과를 넘겨받을 콜백 함수
 */
module.exports.deleteGroups = function(groups, callback) {
  api.request(
    `${domainName}${basePath}/deleteGroups`,
    { groups: groups },
    callback
  )
}
/**
 * 삭제 결과를 넘겨받을 콜백 함수
 * @callback deleteGroupsCallback
 * @param {string} error - 오류메시지
 * @param {object} result - [호출 결과](https://docs.coolsms.co.kr/rest/group-message/delete-groups.html#response-syntax)
 */

/**
 * 그룹메시지를 발송합니다.
 * @param {string} groupId - 발송할 그룹의 아이디
 * @param {sendMessagesCallback} callback - 발송 후 결과를 리턴받는 콜백 함수
 */
module.exports.sendMessages= function(groupId, callback) {
  api.request(
    `${domainName}${basePath}/group/${groupId}/sendMessages`,
    {},
    callback
  )
}
/**
 * 발송 후 결과를 리턴받는 콜백 함수
 * @callback sendMessagesCallback
 * @param {string} error - 오류메시지
 * @param {object} result - [호출 결과](https://docs.coolsms.co.kr/rest/group-message/send-messages.html#response-syntax)
 */

/**
 * API Key 및 API Secret 을 설정합니다.
 * @param {string} apiKey - API Key 입력
 * @param {string} apiSecret - API Secret 입력
 */
module.exports.setCredential = api.setCredential
