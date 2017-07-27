/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');
coolsms.setCredential({
  apiKey:'NCS5NLVVCWC0KI3R',
  apiSecret:'FTY6KK29RK5Y9ADULKSLCOHSF46QOXAH'
});

const params = {
  messages: [
    {
      "to": {
        "recipient": "01048597580"
      },
      "from": "029302266",
      "text": "Wiley입니다. 문자 가나요?",
      "type": "MMS",
      "country": "82",
      "subject": "MMS 제목",
      "imageId": "I3V20170629123542O14I7CZANZV6DUA"
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
