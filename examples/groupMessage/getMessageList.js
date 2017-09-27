/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')
const GroupMessage = coolsms.GroupMessage()
const config = require('../config.json')

GroupMessage.setCredential(config.apiKey, config.apiSecret)

const groupId = 'G3V20170828110611EVNX6HWRC3YUUSO'

GroupMessage.getMessageList(
  groupId,
  function(error, result) {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
