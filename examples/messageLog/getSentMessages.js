/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');

coolsms.setCredential({
  apiKey: 'NCSOGH0TB3PDIGV1',
  apiSecret:'UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49A'
})

const params = {
  begin: '2017-03-18 00:00:00',
  end: '2017-03-19 00:30:00'
}

coolsms.getSentMessages(
  params,
  (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Result:', result);
    }
  }
)
