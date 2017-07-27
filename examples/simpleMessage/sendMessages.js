/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..')

coolsms.setCredential({
  apiKey: 'NCSOGH0TB3PDIGV1',
  apiSecret:'UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49A'
})

const params = {
  messages: [
    {
      "to": {
        "recipient": "01048597580"
      },
      "from": "029302266",
      "text": "SMS 메시지 입니다. 문자 가나요?",
      "type": "SMS",
    }
  ],
  options: {
    appId: 'K00031',
    appVersion: 'JsExample 1.0'
  }
}

coolsms.sendSimpleMessages(
  params,
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
