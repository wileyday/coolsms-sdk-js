/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const api = require('./requestApi.js')
const baseUrl = `https://solapi.com/MessageLog/3`

function getSentMessages(params, callback) {
  api.request(
    `${baseUrl}/getSentMessages`,
    params,
    callback
  )
}

module.exports.setCredential = api.setCredential
module.exports.getSentMessages = getSentMessages
