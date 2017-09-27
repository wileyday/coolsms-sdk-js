/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')
const GroupMessage = coolsms.GroupMessage()
const config = require('../config.json')

GroupMessage.setCredential(config.apiKey, config.apiSecret)

const groups = [
  {
    "groupId": "G3V20170728232843K1PH3JKMB35TUIW"
  }
]

GroupMessage.deleteGroups(
  groups,
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
