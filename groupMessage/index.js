/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const request = require('request');
const url = 'https://solapi.com/GroupMessage/3/createGroup';
const moment = require('moment-timezone');

let apiKey = null;
let apiSecret = null;
const uniqid = require('uniqid');
const HmacMD5 = require('crypto-js/hmac-md5');

function setCredential(_apiKey, _apiSecret) {
  apiKey = _apiKey;
  apiSecret = _apiSecret;
}

function createGroup(options, callback) {
  const date = moment.utc().format();
  const salt = uniqid();
  const hmacData = date + salt;
  const signature = HmacMD5(hmacData, apiSecret).toString();
  let groupOptions = {
    "appId": null,
    "osPlatform": "NodeJS",
    "devLanguage": "NodeJS",
    "sdkVersion": "JS",
    "appVersion": null,
    "siteUser": "__private__",
    "mode": "real",
    "forceSms": "false",
    "onlyAta": "false"
  };

  groupOptions = Object.assign(groupOptions, options);

  request(
    {
      url: url,
      method: 'post',
      headers: {
        'Authorization': `HMAC-MD5 ApiKey=${apiKey}, Date=${date}, Salt=${salt}, Signature=${signature}`
      },
      json: {
        "groupOptions": groupOptions
      }
    },
    function (error, response, body) {
      if (error) {
          console.log(error);
      }
      if (!error && response.statusCode == 200) {
        callback(error, body);
      }
    }
  );
}

module.exports.setCredential = setCredential;
module.exports.createGroup = createGroup;
