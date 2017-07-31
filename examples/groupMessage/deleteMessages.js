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

const groupId = 'G3V20170729004731394Q1UMOOLOAUGN'

const messages = [
  {
    "messageId": "M3V20170729004741OKQHE7Z3VRJKLQL",
  },
]

coolsms.deleteGroupMessages(
  groupId,
  messages,
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
