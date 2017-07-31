/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')
const config = require('../config.json')

coolsms.setCredential({
  apiKey: config.apiKey,
  apiSecret: config.apiSecret
})

const groupOptions = {
  appVersion: 'JsExample v1.0.0',
  testMode: 'false',
}

coolsms.createGroup(
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
