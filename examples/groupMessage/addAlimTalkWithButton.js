/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('../..')
const GroupMessage = coolsms.GroupMessage()
const config = require('../config.json')

GroupMessage.setCredential(config.apiKey, config.apiSecret)

const groupId = 'G3V20170817095410AKD0O4CNOEBQHKV'
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
    "subject": "MMS 제목",
    "kakaoOptions": {
      "senderKey": "65640253a3e61072f57ed5a4cc2ecf965e1b546b",
      "disableSms": "false",
      "templateCode": "T01",
      "buttonName": "버튼",
      "buttonUrl": "https://www.coolsms.co.kr",
    }
  }
]

GroupMessage.addMessages(
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
