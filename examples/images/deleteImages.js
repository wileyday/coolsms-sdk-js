/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')

coolsms.setCredential({
  apiKey: 'NCSOGH0TB3PDIGV1',
  apiSecret:'UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49A'
})

coolsms.deleteImages(
  [
    {
      imageId: "I3V20170726150538DWNZ1SKMGRHB0ZF"
    }
  ], function(error, result) {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
