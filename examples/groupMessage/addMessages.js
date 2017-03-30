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
const messages = [
  {
    "to": [
      "01048597580"
    ],
    "from": "029302266",
    "text": "테스트 문자",
    "type": "SMS",
    "country": "82",
    "subject": "MMS 제목"
  }
];

coolsms.addGroupMessages(groupId, messages, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log('Result:', result);
  }
});
