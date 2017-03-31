/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const request = require('request');
const moment = require('moment-timezone');

let apiKey = null;
let apiSecret = null;
const uniqid = require('uniqid');
const HmacMD5 = require('crypto-js/hmac-md5');

function setCredential(_apiKey, _apiSecret) {
  apiKey = _apiKey;
  apiSecret = _apiSecret;
}

function getScheduledMessages(callback) {
  const url = `https://solapi.com/ScheduledMessage/3/getMessages`;
  const date = moment.utc().format();
  const salt = uniqid();
  const hmacData = date + salt;
  const signature = HmacMD5(hmacData, apiSecret).toString();

  request(
    {
      url: url,
      method: 'get',
      headers: {
        'Authorization': `HMAC-MD5 ApiKey=${apiKey}, Date=${date}, Salt=${salt}, Signature=${signature}`
      }
    },
    function (error, response, body) {
      console.log('error', error);
      console.log('response', response);
      console.log('body', body);
      if (error) {
          console.log(error);
      }
      if (!error && response.statusCode == 200) {
        callback(error, body);
      }
    }
  );
}

function cancelScheduledMessages(messages, callback) {
  const url = `https://solapi.com/ScheduledMessage/3/cancelMessages`;
  const date = moment.utc().format();
  const salt = uniqid();
  const hmacData = date + salt;
  const signature = HmacMD5(hmacData, apiSecret).toString();

  request(
    {
      url: url,
      method: 'post',
      headers: {                                                                        'Authorization': `HMAC-MD5 ApiKey=${apiKey}, Date=${date}, Salt=${salt}, Signature=${signature}`
      },
      json: {
        "messages": messages
      }
    },
    function (error, response, body) {
      console.log('error', error);
      console.log('response', response);
      console.log('body', body);
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
module.exports.getScheduledMessages = getScheduledMessages;
module.exports.cancelScheduledMessages = cancelScheduledMessages;
