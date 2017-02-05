var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = require('./webpack.general.js')({
  entry: [
    
  ],
  devtool: 'source-map',
  rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }
  ],
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
  env: 'production'
});