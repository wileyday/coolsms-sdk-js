/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const groupMessage = require('./groupMessage/index.js');
const simpleMessage = require('./simpleMessage/index.js');
const scheduledMessage = require('./scheduledMessage/index.js');
const account = require('./account.js');
const messageLog = require('./messageLog/index.js');
const images = require('./images/index.js');

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

function addGroupMessages(groupId, messages, callback) {
  groupMessage.setCredential(apiKey, apiSecret);
  groupMessage.addMessages(groupId, messages, callback);
}

function deleteGroupMessages(groupId, messages, callback) {
  groupMessage.setCredential(apiKey, apiSecret);
  groupMessage.deleteMessages(groupId, messages, callback);
}

function getGroupInfo(groupId, callback) {
  groupMessage.setCredential(apiKey, apiSecret);
  groupMessage.getGroupInfo(groupId, callback);
}

function getGroupList(callback) {
  groupMessage.setCredential(apiKey, apiSecret);
  groupMessage.getGroupList(callback);
}

function getGroupMessageList(groupId, callback) {
  groupMessage.setCredential(apiKey, apiSecret);
  groupMessage.getMessageList(groupId, callback);
}

function deleteGroups(groups, callback) {
  groupMessage.setCredential(apiKey, apiSecret);
  groupMessage.deleteGroups(groups, callback);
}

function sendGroupMessages(groupId, callback) {
  groupMessage.setCredential(apiKey, apiSecret);
  groupMessage.sendMessages(groupId, callback);
}

function sendSimpleMessages(params, callback) {
  simpleMessage.setCredential(apiKey, apiSecret);
  simpleMessage.sendMessages(params, callback);
}

function getBalance(callback) {
  account.setCredential(apiKey, apiSecret);
  account.getBalance(callback);
}

function getSentMessages(params, callback) {
  messageLog.setCredential(apiKey, apiSecret);
  messageLog.getSentMessages(params, callback);
}

function uploadImage(params, callback) {
  images.setCredential(apiKey, apiSecret);
  images.uploadImage(params, callback);
}

function getImageList(callback) {
  images.setCredential(apiKey, apiSecret);
  images.getImageList(callback);
}

function getImageInfo(imageId, callback) {
  images.setCredential(apiKey, apiSecret);
  images.getImageInfo(imageId, callback);
}

function deleteImages(imageIds, callback) {
  images.setCredential(apiKey, apiSecret);
  images.deleteImages(imageIds, callback);
}

function getScheduledMessages(callback) {
  scheduledMessage.setCredential(apiKey, apiSecret);
  scheduledMessage.getScheduledMessages(callback);
}

function cancelScheduledMessages(messages, callback) {
  scheduledMessage.setCredential(apiKey, apiSecret);
  scheduledMessage.cancelScheduledMessages(messages, callback);
}

exports.groupMessage = groupMessage;
exports.simpleMessage = simpleMessage;
exports.scheduledMessage = scheduledMessage;

exports.setCredential = setCredential;
exports.createGroup = createGroup;
exports.addGroupMessages = addGroupMessages;
exports.deleteGroupMessages = deleteGroupMessages;
exports.getGroupInfo = getGroupInfo;
exports.getGroupMessageList = getGroupMessageList;
exports.getGroupList = getGroupList;
exports.deleteGroups = deleteGroups;
exports.sendGroupMessages = sendGroupMessages;
exports.sendSimpleMessages = sendSimpleMessages;
exports.getBalance = getBalance;
exports.getSentMessages = getSentMessages;
exports.uploadImage = uploadImage;
exports.getImageList = getImageList;
exports.getImageInfo = getImageInfo;
exports.deleteImages = deleteImages;
exports.getScheduledMessages = getScheduledMessages;
exports.cancelScheduledMessages = cancelScheduledMessages;
