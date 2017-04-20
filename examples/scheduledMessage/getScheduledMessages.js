/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');
coolsms.setCredential({
  apiKey:'NCSHZ4IU3UKAIWLU',
  apiSecret:'QZANZ8YZOJI17UULT2LCMNMPP86NPTJN'
});

coolsms.getScheduledMessages(function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log('Result:', result);
  }
});
