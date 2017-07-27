/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..')

coolsms.setCredential({
  apiKey: 'NCSOGH0TB3PDIGV1',
  apiSecret: 'UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49A'
})

const groupId = 'G3V20170726111424PJ7SL8V0SLCNQOL'

coolsms.getGroupMessageList(
  groupId,
  function(error, result) {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
