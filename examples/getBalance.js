/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const coolsms = require('..')
const Account = coolsms.Account()
const config = require('./config.json')

Account.setCredential(config.apiKey, config.apiSecret)

Account.getBalance(
  (error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Result:', result)
    }
  }
)
