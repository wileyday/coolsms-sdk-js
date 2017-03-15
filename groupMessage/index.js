/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const request = require('request');
const url = 'https://solapi.com/GroupMessage/3/createGroup';

function createGroup() {
  request(
    {
      url: url,
      method: 'post',
      headers: {
        'Authorization': 'HMAC-MD5 ApiKey=NCSBHFS142UDSYOK, Date=2017-03-03T16:46:48+09:00, Salt=SALT1234, Signature=cb6367b2ca2ff12c5463ac193b95ec46'
      },
      json: {
        "groupOptions": {
          "appId": "K0123456",
          "osPlatform": "NodeJS",
          "devLanguage": "NodeJS",
          "sdkVersion": "None",
          "appVersion": "NodeTestClient",
          "siteUser": "__private__",
          "mode": "test",
          "forceSms": "false",
          "onlyAta": "false",
        }
      }
    },
    function (error, response, body) {
      console.log('body');
      console.log(body);
      console.log(response.statusCode);
          if (error) {
              console.log(error);
          }
          if (!error && response.statusCode == 200) {
              console.log(body)
          }
    }
  );
}

module.exports.createGroup = createGroup;
