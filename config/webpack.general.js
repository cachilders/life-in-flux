var resolve  = require('path').resolve;
var validate = require('webpack-validator');

var root = resolve(__dirname, '../')

module.exports = function(options) {
  return validate = ({
    entry: root + '/src/app.jsx',
    output: {
      filename: 'index.js',
      path: root + '/dist'
    }
  });
};
