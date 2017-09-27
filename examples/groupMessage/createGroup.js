/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')
const GroupMessage = coolsms.GroupMessage()
const config = require('../config.json')

GroupMessage.setCredential(config.apiKey, config.apiSecret)

const groupOptions = {
  appVersion: 'JsExample v1.0.0',
  testMode: 'false',
}

GroupMessage.createGroup(
  groupOptions,
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('groupId:', result.groupId)
      console.log('Result:', result)
    }
  }
)
