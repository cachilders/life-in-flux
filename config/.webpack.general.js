var path = requitre('path');

module.exports = {
  entry: '../src/app.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};