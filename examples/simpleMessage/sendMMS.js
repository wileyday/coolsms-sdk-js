/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')
const config = require('../config.json')

coolsms.setCredential({
  apiKey: config.apiKey,
  apiSecret: config.apiSecret
})

const params = {
  messages: [
    {
      "to": {
        "recipient": "01000000001"
      },
      "from": "02000000002",
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
