/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const baseUrl = 'https://solapi.com/GroupMessage/3'
const api = require('./requestApi.js')

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
    `${baseUrl}/createGroup`,
    { groupOptions: groupOptions },
    callback
  )
}

function addMessages(groupId, messages, callback) {
  api.request(
    `${baseUrl}/group/${groupId}/addMessages`,
    { messages: messages },
    callback
  )
}

function deleteMessages(groupId, messages, callback) {
  api.request(
    `${baseUrl}/group/${groupId}/deleteMessages`,
    { messages: messages },
    callback
  )
}

function getGroupInfo(groupId, callback) {
  api.request(
    `${baseUrl}/group/${groupId}/getGroupInfo`,
    {},
    callback
  )
}

function getMessageList(groupId, callback) {
  api.request(
    `${baseUrl}/group/${groupId}/getMessageList`,
    {},
    callback
  )
}

function getGroupList(callback) {
  api.request(
    `${baseUrl}/getGroupList`,
    {},
    callback
  )
}

function deleteGroups(groups, callback) {
  api.request(
    `${baseUrl}/deleteGroups`,
    { groups: groups },
    callback
  )
}

function sendMessages(groupId, callback) {
  api.request(
    `${baseUrl}/group/${groupId}/sendMessages`,
    {},
    callback
  )
}

module.exports.setCredential = api.setCredential
module.exports.createGroup = createGroup
module.exports.addMessages = addMessages
module.exports.deleteMessages = deleteMessages
module.exports.getGroupInfo = getGroupInfo
module.exports.getMessageList = getMessageList
module.exports.getGroupList = getGroupList
module.exports.deleteGroups = deleteGroups
module.exports.sendMessages= sendMessages
