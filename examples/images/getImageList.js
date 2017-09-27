/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')
const Images = coolsms.Images()
const config = require('../config.json')

Images.setCredential(config.apiKey, config.apiSecret)

Images.getImageList(
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
