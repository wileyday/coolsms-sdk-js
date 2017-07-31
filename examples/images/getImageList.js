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

coolsms.getImageList(
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
