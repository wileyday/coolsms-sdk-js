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

const groupId = 'G3V20170729004731394Q1UMOOLOAUGN'
const messages = [
  {
    "to": {
      "recipientsWithCustomFields": [
        {
          "recipient": "01000000001",
          "customFields": {
            "myMessageId": "my02",
            "mySequence": 2,
            "subGroup": {
              "a":"a",
              "b":"b"
            },
            "subArray": [
              "1",
              "2",
              "3"
            ]
          }
        }
      ]
    },
    "from": "0200000001",
    "text": "테스트 문자",
    "type": "SMS",
    "country": "82",
    "subject": "MMS 제목"
  }
]

coolsms.addGroupMessages(
  groupId,
  messages,
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', JSON.stringify(result, null, 2))
    }
  }
)
