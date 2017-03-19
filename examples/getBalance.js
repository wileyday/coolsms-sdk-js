/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('..');
coolsms.setCredential({
  apiKey:'NCS530463DDD1591',
  apiSecret:'5B56D8FA8D3BD9D55BE95152939C16E1'
});

coolsms.getBalance(function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log('Result:', result);
  }
});
