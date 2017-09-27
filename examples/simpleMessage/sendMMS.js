/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')
const SimpleMessage = coolsms.SimpleMessage()
const config = require('../config.json')

SimpleMessage.setCredential(config.apiKey, config.apiSecret)

const params = {
  messages: [
    {
      "to": {
        "recipient": "01048597580"
      },
      "from": "02000000002",
      "text": "Wiley입니다. 문자 가나요?",
      "type": "MMS",
      "country": "82",
      "subject": "MMS 제목",
      "imageId": "I3V20170909201840EAJIJHZQPK0XMTO"
    }
  ],
  options: {
    appId: 'K00031',
    appVersion: 'JsExample 1.0'
  }
}

SimpleMessage.sendMessages(
  params,
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
