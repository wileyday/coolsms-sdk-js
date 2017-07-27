/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..')

coolsms.setCredential({
  apiKey: 'NCSOGH0TB3PDIGV1',
  apiSecret: 'UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49A'
})

const groupId = 'G3V20170726110230LV4APL1FN6IFNXN'

coolsms.sendGroupMessages(
  groupId,
  (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Result:', result)
    }
  }
)
