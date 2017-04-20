/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');
coolsms.setCredential({
  apiKey:'NCSHZ4IU3UKAIWLU',
  apiSecret:'QZANZ8YZOJI17UULT2LCMNMPP86NPTJN'
});
const groupId = 'GID6RJCZ71J0VZYMLH';

coolsms.sendGroupMessages(groupId, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log('Result:', result);
  }
});
