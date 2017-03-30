/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const request = require('request');
const moment = require('moment-timezone');
const fs = require('fs');

let apiKey = null;
let apiSecret = null;
const uniqid = require('uniqid');
const HmacMD5 = require('crypto-js/hmac-md5');

function setCredential(_apiKey, _apiSecret) {
  apiKey = _apiKey;
  apiSecret = _apiSecret;
}

function uploadImage(imagePath, callback) {
  const url = `https://api.coolsms.co.kr/sms/2/upload_image`;
  const salt = uniqid();
  const timestamp = moment().tz('Asia/Seoul').unix();
  const hmacData = timestamp + salt;
  const signature = HmacMD5(hmacData, apiSecret).toString();

	var formData = {
    api_key: apiKey,
    timestamp: timestamp,
    salt: salt,
    signature: signature,
		// Pass data via Streams
		image: fs.createReadStream(imagePath),
	};
	request.post({url:url, formData: formData}, function optionalCallback(err, httpResponse, body) {
		if (err) {
			return console.error('upload failed:', err);
		}
		console.log('Upload successful!  Server responded with:', body);
    callback(err, body);
	});
}

function getImageList(callback) {
  const url = `https://api.coolsms.co.kr/sms/2/image_list`;
  const salt = uniqid();
  const timestamp = moment().tz('Asia/Seoul').unix();
  const hmacData = timestamp + salt;
  const signature = HmacMD5(hmacData, apiSecret).toString();
  const request_url = `${url}?api_key=${apiKey}&timestamp=${timestamp}&salt=${salt}&signature=${signature}`;

	request(
    {
      url: request_url,
      method: 'get'
    }, function optionalCallback(err, httpResponse, body) {
		if (err) {
			return console.error('upload failed:', err);
		}
		console.log('Upload successful!  Server responded with:', body);
    callback(err, body);
	});
}

function getImageInfo(imageId, callback) {
  const url = `https://api.coolsms.co.kr/sms/2/images/${imageId}`;
  const salt = uniqid();
  const timestamp = moment().tz('Asia/Seoul').unix();
  const hmacData = timestamp + salt;
  const signature = HmacMD5(hmacData, apiSecret).toString();
  const request_url = `${url}?api_key=${apiKey}&timestamp=${timestamp}&salt=${salt}&signature=${signature}`;

	request(
    {
      url: request_url,
      method: 'get'
    }, function optionalCallback(err, httpResponse, body) {
		if (err) {
			return console.error('upload failed:', err);
		}
		console.log('Upload successful!  Server responded with:', body);
    callback(err, body);
	});
}

function deleteImages(imageIds, callback) {
  const url = `https://api.coolsms.co.kr/sms/2/delete_images`;
  const salt = uniqid();
  const timestamp = moment().tz('Asia/Seoul').unix();
  const hmacData = timestamp + salt;
  const signature = HmacMD5(hmacData, apiSecret).toString();

	var formData = {
    api_key: apiKey,
    timestamp: timestamp,
    salt: salt,
    signature: signature,
		image_ids: imageIds.join()
	};

	request.post({url:url, formData: formData}, function optionalCallback(err, httpResponse, body) {
		if (err) {
			return console.error('upload failed:', err);
		}
		console.log('Upload successful!  Server responded with:', body);
    callback(err, body);
	});
}

module.exports.setCredential = setCredential;
module.exports.uploadImage = uploadImage;
module.exports.getImageList = getImageList;
module.exports.getImageInfo = getImageInfo;
module.exports.deleteImages = deleteImages;
