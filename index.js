/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const groupMessage = require('./groupMessage/index.js');
const simpleMessage = require('./simpleMessage/index.js');
const scheduledMessage = require('./scheduledMessage/index.js');

exports.groupMessage = groupMessage;
exports.simpleMessage = simpleMessage;
exports.scheduledMessage = scheduledMessage;
