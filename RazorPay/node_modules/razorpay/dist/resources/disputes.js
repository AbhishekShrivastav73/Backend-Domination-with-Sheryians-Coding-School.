'use strict';

module.exports = function (api) {

    var BASE_URL = "/disputes";

    return {
        fetch: function fetch(disputeId, callback) {
            return api.get({
                url: BASE_URL + "/" + disputeId
            }, callback);
        },
        all: function all() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments[1];
            var count = params.count,
                skip = params.skip;


            count = Number(count) || 10;
            skip = Number(skip) || 0;

            return api.get({
                url: "" + BASE_URL,
                data: {
                    count: count,
                    skip: skip
                }
            }, callback);
        },
        accept: function accept(disputeId, callback) {
            return api.post({
                url: BASE_URL + "/" + disputeId + "/accept"
            }, callback);
        },
        contest: function contest(disputeId, param, callback) {
            return api.patch({
                url: BASE_URL + "/" + disputeId + "/contest",
                data: param
            }, callback);
        }
    };
};