const path = require('path');

module.exports = {
  entry: [path.join(__dirname, 'lib/index.js')],
  output: {
    filename: path.join(__dirname, 'dist/es6/index.js'),
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};
