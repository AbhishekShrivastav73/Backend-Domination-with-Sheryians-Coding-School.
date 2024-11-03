'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = function (api) {

    var BASE_URL = "/accounts";

    return {
        create: function create(accountId, params, callback) {
            return api.post({
                version: 'v2',
                url: BASE_URL + '/' + accountId + '/stakeholders',
                data: params
            }, callback);
        },
        edit: function edit(accountId, stakeholderId, params, callback) {
            return api.patch({
                version: 'v2',
                url: BASE_URL + '/' + accountId + '/stakeholders/' + stakeholderId,
                data: params
            }, callback);
        },
        fetch: function fetch(accountId, stakeholderId, callback) {
            return api.get({
                version: 'v2',
                url: BASE_URL + '/' + accountId + '/stakeholders/' + stakeholderId
            }, callback);
        },
        all: function all(accountId, callback) {
            return api.get({
                version: 'v2',
                url: BASE_URL + '/' + accountId + '/stakeholders'
            }, callback);
        },
        uploadStakeholderDoc: function uploadStakeholderDoc(accountId, stakeholderId, params, callback) {
            var file = params.file,
                rest = _objectWithoutProperties(params, ['file']);

            return api.postFormData({
                version: 'v2',
                url: BASE_URL + '/' + accountId + '/stakeholders/' + stakeholderId + '/documents',
                formData: _extends({
                    file: file.value }, rest)
            }, callback);
        },
        fetchStakeholderDoc: function fetchStakeholderDoc(accountId, stakeholderId, callback) {
            return api.get({
                version: 'v2',
                url: BASE_URL + '/' + accountId + '/stakeholders/' + stakeholderId + '/documents'
            }, callback);
        }
    };
};