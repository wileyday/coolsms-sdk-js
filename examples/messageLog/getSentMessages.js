/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')
const MessageLog = coolsms.MessageLog()
const config = require('../config.json')

MessageLog.setCredential(config.apiKey, config.apiSecret)

const params = {
  begin: '2017-03-18 00:00:00',
  end: '2017-03-19 00:30:00'
}

MessageLog.getSentMessages(
  params,
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
