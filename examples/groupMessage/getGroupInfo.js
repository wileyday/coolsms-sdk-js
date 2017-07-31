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

const groupId = 'G3V20170728224824CQC6INBIPO5JPL6'

coolsms.getGroupInfo(
  groupId,
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
