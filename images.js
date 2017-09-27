/**
 * 이미지를 등록, 조회, 삭제합니다.
 * @module Images
 */
'use strict'

const api = require('./requestApi.js')
const fs = require('fs');

const baseUrl = 'https://solapi.com/images/3'

/**
 * 이미지 업로드
 * @param {string} imagePath - 업로드 하려는 이미지의 경로
 * @param {uploadImageCallback} callback - Callback 함수
 */
module.exports.uploadImage = function(imagePath, callback) {
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
/**
 * 이미지 업로드 결과를 넘겨받는 콜백 함수
 * @callback uploadImageCallback
 * @param {string} error - 오류메시지
 * @param {object} result - [호출 결과](https://docs.coolsms.co.kr/rest/images/uploadImage.html#response-syntax)
 */

/**
 * 이미지 목록을 리턴합니다.
 * @param {getImageListCallback} callback - 이미지 목록을 넘겨받는 콜백 함수
 */
module.exports.getImageList = function(callback) {
  api.request(
    `${baseUrl}/getImageList`,
    {},
    callback 
  )
}
/**
 * 이미지 목록을 넘겨받는 콜백 함수
 * @param {string} error - 오류메시지
 * @param {object} result - [호출 결과](https://docs.coolsms.co.kr/rest/images/getImageList.html#response-syntax)
 */

/**
 * 이미지 정보를 리턴합니다.
 * @param {string} imageId - 이미지 아이디
 * @param {getImageInfoCallback} callback - 이미지 정보를 넘겨받는 콜백 함수
 */
module.exports.getImageInfo = function(imageId, callback) {
  api.request(
    `${baseUrl}/image/${imageId}/getImageInfo`,
    {},
    callback 
  )
}
/**
 * 이미지 정보를 넘겨받는 콜백 함수
 * @callback getImageInfoCallback
 * @param {string} error - 오류 메시지
 * @param {object} result - [호출 결과](https://docs.coolsms.co.kr/rest/images/getImageInfo.html#response-syntax)
 */

/**
 * 이미지를 삭제합니다.
 * @param {array} images - 삭제할 이미지 목록 [Syntax](https://docs.coolsms.co.kr/rest/images/deleteImages.html#request-syntax)
 * @param {deleteImagesCallback} callback - 삭제 결과를 넘겨받는 콜백 함수
 */
module.exports.deleteImages = function(images, callback) {
  api.request(
    `${baseUrl}/deleteImages`,
    { images: images },
    callback 
  )
}
/**
 * 삭제 결과를 넘겨받는 콜백 함수
 * @callback deleteImagesCallback
 * @param {string} error - 오류 메시지
 * @param {object} result - [호출 결과](https://docs.coolsms.co.kr/rest/images/deleteImages.html#response-syntax)
 */

/**
 * API Key 및 API Secret 설정
 * @param {string} API Key 입력
 * @param {string} API Secret 입력
 */
module.exports.setCredential = api.setCredential;
