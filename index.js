/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const groupMessage = require('./groupMessage/index.js');
const simpleMessage = require('./simpleMessage/index.js');
const scheduledMessage = require('./scheduledMessage/index.js');

let apiKey = null;
let apiSecret = null;

function setCredential(params) {
  apiKey = params.apiKey;
  apiSecret = params.apiSecret;
}

function createGroup(options, callback) {
  groupMessage.setCredential(apiKey, apiSecret);
  groupMessage.createGroup(options, callback);
}

exports.groupMessage = groupMessage;
exports.simpleMessage = simpleMessage;
exports.scheduledMessage = scheduledMessage;

exports.setCredential = setCredential;
exports.createGroup = createGroup;
