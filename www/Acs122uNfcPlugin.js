var exec = require('cordova/exec');

module.exports.connect = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'Acs122uNfcPlugin', 'conncet', []);
}

module.exports.disconnect = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'Acs122uNfcPlugin', 'disconnect', []);
}
