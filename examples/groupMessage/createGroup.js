/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..')

coolsms.setCredential({
  apiKey: 'NCSOGH0TB3PDIGV1',
  apiSecret: 'UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49A'
})

const groupOptions = {
  appVersion: 'JsExample v1.0.0',
  testMode: 'false',
}

coolsms.createGroup(
  groupOptions,
  (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log('groupId:', result.groupId)
      console.log('Result:', result);
    }
  }
)
