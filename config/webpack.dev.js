var webpack = require('webpack');

module.exports = require('./webpack.general.js')({
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.jsx'
  ],
  devtool: 'inline-source-map',
  rules: [
    {
      test: /\.css$/,
      use:[
        'style-loader',
        'css-loader?modules',
        'postcss-loader'
      ]
    }
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  env: 'development'
});