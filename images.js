/**
 * vi:set sw=2 ts=2 expandtab:
 */
'use strict'

const api = require('./requestApi.js')
const fs = require('fs');

const baseUrl = 'https://solapi.com/images/3'

function uploadImage(imagePath, callback) {
  fs.readFile(
    imagePath,
    (error, imageContent) => {
      if (error) {
        return console.log(error)
      }
      api.request(
        `${baseUrl}/uploadImage`,
        { imageContent: imageContent.toString('base64') },
        callback
      )
    }
  )
}

function getImageList(callback) {
  api.request(
    `${baseUrl}/getImageList`,
    {},
    callback 
  )
}

function getImageInfo(imageId, callback) {
  api.request(
    `${baseUrl}/image/${imageId}/getImageInfo`,
    {},
    callback 
  )
}

function deleteImages(images, callback) {
  api.request(
    `${baseUrl}/deleteImages`,
    { images: images },
    callback 
  )
}

module.exports.setCredential = api.setCredential;
module.exports.uploadImage = uploadImage;
module.exports.getImageList = getImageList;
module.exports.getImageInfo = getImageInfo;
module.exports.deleteImages = deleteImages;
