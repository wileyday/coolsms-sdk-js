/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');
coolsms.setCredential({
  apiKey:'NCSBHFS142UDSYOK',
  apiSecret:'6KLUATUXSUNXCP6WYIEZACJ1FPBJ1AA7'
});
const groupId = 'GID6YXK251J0DELYOX';

coolsms.sendGroupMessages(groupId, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log('Result:', result);
  }
});
