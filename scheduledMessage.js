/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const api = require('./requestApi.js')
const baseUrl = 'https://solapi.com/ScheduledMessage/3'

function getScheduledMessages(callback) {
  api.request(
    `${baseUrl}/getMessages`,
    {},
    callback
  )
}

function cancelScheduledMessages(messages, callback) {
  api.request(
    `${baseUrl}/cancelMessages`,
    { messages: messages },
    callback
  )
}

module.exports.setCredential = api.setCredential;
module.exports.getScheduledMessages = getScheduledMessages;
module.exports.cancelScheduledMessages = cancelScheduledMessages;
