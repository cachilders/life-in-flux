var validate          = require('webpack-validator');
var resolve           = require('path').resolve;
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var base = resolve(__dirname, '../');

module.exports = function(options) {
  return validate = ({
    entry: [base + '/src/index.jsx'].concat(options.entry),
    output: {
      filename: 'index.js',
      path: base + '/dist'
    },
    context: base + '/src',
    devtool: options.devtool,
    devServer: {
      hot: true,
      contentBase: base + '/dist'
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          use: ['babel-loader'],
          exclude: /node-modules/
        }
      ].concat(options.rules)
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: base + '/src/index.html'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(options.env)
      })
    ].concat(options.plugins)
  });
};
