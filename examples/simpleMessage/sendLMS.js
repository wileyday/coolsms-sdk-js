/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');
coolsms.setCredential({
  apiKey:'NCSRPB685VXTOWLA',
  apiSecret:'KHMHGFCYAGTHD4XIXGRSYMFZADC0K5WS'
});

const params = {
  messages: [
    {
      "to": {
        "recipient": "01032777580"
      },
      "from": "029302266",
      "text": "Wiley입니다. 문자 가나요?",
      "type": "LMS",
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
