/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')
const GroupMessage = coolsms.GroupMessage();
const config = require('../config.json')

GroupMessage.setCredential(config.apiKey, config.apiSecret)

const groupId = 'G3V20170919153907PSHKLLP3LRQWGW2'

GroupMessage.getGroupInfo(
  groupId,
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
