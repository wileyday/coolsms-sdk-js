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

function createGroup(options, callback) {
  const url = 'https://solapi.com/GroupMessage/3/createGroup';
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

function addMessages(groupId, messages, callback) {
  const url = `https://solapi.com/GroupMessage/3/group/${groupId}/addMessages`;
  const date = moment.utc().format();
  const salt = uniqid();
  const hmacData = date + salt;
  const signature = HmacMD5(hmacData, apiSecret).toString();

  console.log(url);

  request(
    {
      url: url,
      method: 'post',
      headers: {
        'Authorization': `HMAC-MD5 ApiKey=${apiKey}, Date=${date}, Salt=${salt}, Signature=${signature}`
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

function deleteMessages(groupId, messages, callback) {
  const url = `https://solapi.com/GroupMessage/3/group/${groupId}/deleteMessages`;
  const date = moment.utc().format();
  const salt = uniqid();
  const hmacData = date + salt;
  const signature = HmacMD5(hmacData, apiSecret).toString();

  console.log(url);

  request(
    {
      url: url,
      method: 'post',
      headers: {
        'Authorization': `HMAC-MD5 ApiKey=${apiKey}, Date=${date}, Salt=${salt}, Signature=${signature}`
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

function getGroupInfo(groupId, callback) {
  const url = `https://solapi.com/GroupMessage/3/group/${groupId}`;
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

function getMessageList(groupId, callback) {
  const url = `https://solapi.com/GroupMessage/3/group/${groupId}/getMessageList`;
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

function getGroupList(callback) {
  const url = `https://solapi.com/GroupMessage/3/getGroupList`;
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

function deleteGroups(groups, callback) {
  const url = `https://solapi.com/GroupMessage/3/deleteGroups`;
  const date = moment.utc().format();
  const salt = uniqid();
  const hmacData = date + salt;
  const signature = HmacMD5(hmacData, apiSecret).toString();

  request(
    {
      url: url,
      method: 'post',
      headers: {
        'Authorization': `HMAC-MD5 ApiKey=${apiKey}, Date=${date}, Salt=${salt}, Signature=${signature}`
      },
      json: {
        "groups": groups
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

function sendMessages(groupId, callback) {
  const url = `https://solapi.com/GroupMessage/3/group/${groupId}/sendMessages`;
  const date = moment.utc().format();
  const salt = uniqid();
  const hmacData = date + salt;
  const signature = HmacMD5(hmacData, apiSecret).toString();

  request(
    {
      url: url,
      method: 'post',
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

module.exports.setCredential = setCredential;
module.exports.createGroup = createGroup;
module.exports.addMessages = addMessages;
module.exports.deleteMessages = deleteMessages;
module.exports.getGroupInfo = getGroupInfo;
module.exports.getMessageList = getMessageList;
module.exports.getGroupList = getGroupList;
module.exports.deleteGroups = deleteGroups;
module.exports.sendMessages= sendMessages;
