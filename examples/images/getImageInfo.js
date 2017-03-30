/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');
coolsms.setCredential({
  apiKey:'NCSY4C8GYRW7HA3L',
  apiSecret:'BVO23R1Q0APQ08O6PA3ZSOKFWDHDNBRO'
});

coolsms.getImageInfo('IMG58DC55C0CA389', function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log('Result:', result);
  }
});
