'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = function (api) {

    var BASE_URL = "/documents";

    return {
        create: function create(params, callback) {
            var file = params.file,
                rest = _objectWithoutProperties(params, ["file"]);

            return api.postFormData({
                url: "" + BASE_URL,
                formData: _extends({
                    file: file.value }, rest)
            }, callback);
        },
        fetch: function fetch(documentId, callback) {
            return api.get({
                url: BASE_URL + "/" + documentId
            }, callback);
        }
    };
};