/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');
coolsms.setCredential({
  apiKey:'NCSBHFS142UDSYOK',
  apiSecret:'6KLUATUXSUNXCP6WYIEZACJ1FPBJ1AA7'
});
const groupId = 'GID14P21J0D825GP';
const messages = ["MIDETS7X1J0D95O8R", "MID3QT1J0D9GTAI"];

coolsms.deleteGroupMessages(groupId, messages, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log('Result:', result);
  }
});
