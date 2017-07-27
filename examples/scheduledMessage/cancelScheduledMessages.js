/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..')

coolsms.setCredential({
  apiKey: 'NCSOGH0TB3PDIGV1',
  apiSecret: 'UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49A'
})

const messages = [
  {
    messageId: 'MIDL6O1J0W3DCTM'
  }
]

coolsms.cancelScheduledMessages(
  messages,
  (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Result:', result);
    }
  }
)
