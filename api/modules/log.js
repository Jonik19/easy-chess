var config = require('../config');

module.exports = function (data) {
  if(config.debug) {
    console.log(data);
  }
};