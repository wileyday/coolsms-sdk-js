/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');
coolsms.setCredential({
  apiKey:'NCSHZ4IU3UKAIWLU',
  apiSecret:'QZANZ8YZOJI17UULT2LCMNMPP86NPTJN'
});

const params = {
  messages: [
    {
      "to": [
        "01048597580"
      ],
      "from": "029302266",
      "text": "테스트 문자 #2",
      "type": "SMS",
      "country": "82",
      "subject": "MMS 제목"
    }
  ],
  options: {
    appId: 'K00031',
    appVersion: 'JsExample 1.0'
  }
}

coolsms.sendSimpleMessages(params, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log('Result:', result);
  }
});
