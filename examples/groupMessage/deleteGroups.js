/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict';

const coolsms = require('../..');
coolsms.setCredential({
  apiKey:'NCSBHFS142UDSYOK',
  apiSecret:'6KLUATUXSUNXCP6WYIEZACJ1FPBJ1AA7'
});
const groups = ["GIDFTBG41IZI4DU5Q"];

coolsms.deleteGroups(groups, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log('Result:', result);
  }
});
