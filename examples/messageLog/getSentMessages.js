/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');
coolsms.setCredential({
  apiKey:'NCSBHFS142UDSYOK',                                                    
  apiSecret:'6KLUATUXSUNXCP6WYIEZACJ1FPBJ1AA7'   
});

const params = {
  begin: '2017-03-18 00:00:00',
  end: '2017-03-19 00:30:00'
};

coolsms.getSentMessages(params, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log('Result:', result);
  }
});
