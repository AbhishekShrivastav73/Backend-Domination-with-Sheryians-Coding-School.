'use strict';

module.exports = function (api) {
  return {
    create: function create(params, callback) {
      return api.post({
        url: '/customers',
        data: params
      }, callback);
    },
    edit: function edit(customerId, params, callback) {
      return api.put({
        url: '/customers/' + customerId,
        data: params
      }, callback);
    },
    fetch: function fetch(customerId, callback) {
      return api.get({
        url: '/customers/' + customerId
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
        url: '/customers',
        data: {
          count: count,
          skip: skip
        }
      }, callback);
    },
    fetchTokens: function fetchTokens(customerId, callback) {
      return api.get({
        url: '/customers/' + customerId + '/tokens'
      }, callback);
    },
    fetchToken: function fetchToken(customerId, tokenId, callback) {
      return api.get({
        url: '/customers/' + customerId + '/tokens/' + tokenId
      }, callback);
    },
    deleteToken: function deleteToken(customerId, tokenId, callback) {
      return api.delete({
        url: '/customers/' + customerId + '/tokens/' + tokenId
      }, callback);
    },
    addBankAccount: function addBankAccount(customerId, params, callback) {
      return api.post({
        url: '/customers/' + customerId + '/bank_account',
        data: params
      }, callback);
    },
    deleteBankAccount: function deleteBankAccount(customerId, bankId, callback) {
      return api.delete({
        url: '/customers/' + customerId + '/bank_account/' + bankId
      }, callback);
    },
    requestEligibilityCheck: function requestEligibilityCheck(params, callback) {
      return api.post({
        url: '/customers/eligibility',
        data: params
      }, callback);
    },
    fetchEligibility: function fetchEligibility(eligibilityId, callback) {
      return api.get({
        url: '/customers/eligibility/' + eligibilityId
      }, callback);
    }
  };
};