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
        "recipient": "01000000001"
      },
      "from": "0200000001",
      "text": "SMS 메시지 입니다. 문자 가나요?",
      "type": "SMS",
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
