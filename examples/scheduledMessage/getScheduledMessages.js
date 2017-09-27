/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')
const ScheduledMessage = coolsms.ScheduledMessage()
const config = require('../config.json')

ScheduledMessage.setCredential(config.apiKey, config.apiSecret)

ScheduledMessage.getScheduledMessages(
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
