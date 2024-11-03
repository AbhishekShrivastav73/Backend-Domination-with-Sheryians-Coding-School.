'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = function (api) {

    var BASE_URL = "/accounts";

    return {
        create: function create(params, callback) {
            return api.post({
                version: 'v2',
                url: '' + BASE_URL,
                data: params
            }, callback);
        },
        edit: function edit(accountId, params, callback) {
            return api.patch({
                version: 'v2',
                url: BASE_URL + '/' + accountId,
                data: params
            }, callback);
        },
        fetch: function fetch(accountId, callback) {
            return api.get({
                version: 'v2',
                url: BASE_URL + '/' + accountId
            }, callback);
        },
        delete: function _delete(accountId, callback) {
            return api.delete({
                version: 'v2',
                url: BASE_URL + '/' + accountId
            }, callback);
        },
        uploadAccountDoc: function uploadAccountDoc(accountId, params, callback) {
            var file = params.file,
                rest = _objectWithoutProperties(params, ['file']);

            return api.postFormData({
                version: 'v2',
                url: BASE_URL + '/' + accountId + '/documents',
                formData: _extends({
                    file: file.value }, rest)
            }, callback);
        },
        fetchAccountDoc: function fetchAccountDoc(accountId, callback) {
            return api.get({
                version: 'v2',
                url: BASE_URL + '/' + accountId + '/documents'
            }, callback);
        }
    };
};