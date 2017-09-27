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
      "text": "테스트 문자",
      "type": "SMS",
      "country": "82",
      "subject": "MMS 제목",
      "scheduledDate": "2017-04-10 11:40:00"
    }
  ],
  options: {
    appId: null,
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
})
