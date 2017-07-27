/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');
coolsms.setCredential({
  apiKey:'NCSOGH0TB3PDIGV1',
  apiSecret:'UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49A'
});
const groupId = 'G3V20170726114734DDJNAOO7RDZZEN0';
const messages = [
  {
    "to": {
      "recipientsWithCustomFields": [
        {
          "recipient": "01000000001",
          "customFields": {
            "myMessageId": "my02",
            "mySequence": 2,
            "subGroup": {
              "a":"a",
              "b":"b"
            },
            "subArray": [
              "1",
              "2",
              "3"
            ]
          }
        }
      ]
    },
    "from": "0200000001",
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
    console.log('Result:', JSON.stringify(result, null, 2));
  }
});
