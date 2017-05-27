//Module system CommonJS (node.js)
var path = require('path');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, './build')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  }

};
