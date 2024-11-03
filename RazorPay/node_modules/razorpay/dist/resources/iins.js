'use strict';

module.exports = function (api) {

    var BASE_URL = "/iins";

    return {
        fetch: function fetch(tokenIin, callback) {
            return api.get({
                url: BASE_URL + "/" + tokenIin
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];

            return api.get({
                url: BASE_URL + "/list",
                data: params
            }, callback);
        }
    };
};