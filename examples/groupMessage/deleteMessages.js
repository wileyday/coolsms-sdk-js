/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');

coolsms.setCredential({
  apiKey: 'NCSOGH0TB3PDIGV1',
  apiSecret: 'UDWMZBDEQOTXNU1K2HOUJ2ZCVELFF49A'
})

const groupId = 'G3V20170620164230OAITFRIHRNLVQBX'

const messages = [
  {
    "messageId": "M3V20170620164239BNI6U5JIJECJXNG",
  },
  {
    "messageId": "M3V201706201642391VTIWYEU2P1KI5D",
  },
]

coolsms.deleteGroupMessages(
  groupId,
  messages,
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
