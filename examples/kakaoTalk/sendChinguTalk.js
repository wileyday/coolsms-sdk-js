/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')

coolsms.setCredential({
  apiKey:'NCSOGH0TB3PDIGV1',
  apiSecret:'UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49A'
})

const params = {
  messages: [
    {
      "to": {
        "recipient": "01000000001"
      },
      "from": "0200000001",
      "text": "카톡메시지 친구톡 테스트입니다.",
      "type": "CTA",
      "country": "82",
      "subject": "MMS 제목",
      "kakaoOptions": {
        "senderKey": "65640253a3e61072f57ed5d4cc2ecf965e15bb64",
        "disableSms": "false"
      }
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
      console.log(error);
    } else {
      console.log('Result:', result);
    }
  }
)
