/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')
const GroupMessage = coolsms.GroupMessage()
const config = require('../config.json')

GroupMessage.setCredential(config.apiKey, config.apiSecret)

GroupMessage.getGroupList(function(error, result) {
  if (error) {
    console.log(error)
  } else {
    console.log('Result:', JSON.stringify(result, null, 2))
  }
})
