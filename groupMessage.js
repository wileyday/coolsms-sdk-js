/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

let domainName = 'https://solapi.com'
const basePath = '/GroupMessage/3'
const api = require('./requestApi.js')

function setDomainName(_domainName) {
  domainName = _domainName
}

function createGroup(options, callback) {
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

function addMessages(groupId, messages, callback) {
  api.request(
    `${domainName}${basePath}/group/${groupId}/addMessages`,
    { messages: messages },
    callback
  )
}

function deleteMessages(groupId, messages, callback) {
  api.request(
    `${domainName}${basePath}/group/${groupId}/deleteMessages`,
    { messages: messages },
    callback
  )
}

function getGroupInfo(groupId, callback) {
  api.request(
    `${domainName}${basePath}/group/${groupId}/getGroupInfo`,
    {},
    callback
  )
}

function getMessageList(groupId, callback) {
  api.request(
    `${domainName}${basePath}/group/${groupId}/getMessageList`,
    {},
    callback
  )
}

function getGroupList(callback) {
  api.request(
    `${domainName}${basePath}/getGroupList`,
    {},
    callback
  )
}

function deleteGroups(groups, callback) {
  api.request(
    `${domainName}${basePath}/deleteGroups`,
    { groups: groups },
    callback
  )
}

function sendMessages(groupId, callback) {
  api.request(
    `${domainName}${basePath}/group/${groupId}/sendMessages`,
    {},
    callback
  )
}

module.exports.setCredential = api.setCredential
module.exports.setDomainName = setDomainName
module.exports.createGroup = createGroup
module.exports.addMessages = addMessages
module.exports.deleteMessages = deleteMessages
module.exports.getGroupInfo = getGroupInfo
module.exports.getMessageList = getMessageList
module.exports.getGroupList = getGroupList
module.exports.deleteGroups = deleteGroups
module.exports.sendMessages= sendMessages
