/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const baseUrl = 'https://solapi.com/SimpleMessage/3'
const api = require('./requestApi.js')

function sendMessages(params, callback) {
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

  params.groupOptions = Object.assign(groupOptions, params.options);

  api.request(
    `${baseUrl}/sendMessages`,
    params,
    callback
  )
}

module.exports.setCredential = api.setCredential;
module.exports.sendMessages = sendMessages;
