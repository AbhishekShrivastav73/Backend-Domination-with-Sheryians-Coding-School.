'use strict';

var nodeify = function nodeify(promise, cb) {

  if (!cb) {
    return promise.then(function (response) {
      return response.data;
    });
  }

  return promise.then(function (response) {
    cb(null, response.data);
  }).catch(function (error) {
    cb(error, null);
  });
};

module.exports = nodeify;