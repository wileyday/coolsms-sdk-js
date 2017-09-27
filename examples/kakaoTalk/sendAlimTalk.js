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
      "text": "카톡메시지 친구톡 테스트입니다.",
      "type": "ATA",
      "country": "82",
      "subject": "MMS 제목",
      "kakaoOptions": {
        "senderKey": "65640253a3e61072f57ed5d4cc2ecf965e15bb64",
        "disableSms": "false",
        "templateCode": "C004",
      }
    }
  ],
  options: {
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
