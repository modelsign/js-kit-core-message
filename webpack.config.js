const path    = require('path');
const package = require('./package');

module.exports = {
  entry    : './src/index.js',
  output   : {
    path    : path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase       : './dist',
    host              : '0.0.0.0',
    port              : 8080,
    historyApiFallback: true,
    inline            : true
  },
  module   : {
    unknownContextCritical: false,
    rules                 : [
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        use    : [
          {
            loader : 'babel-loader',
            options: {
              presets: [['es2015', { modules: false }]]
            }
          }
        ]
      },
      {
        test  : /\.ts$/,
        loader: 'babel-loader!ts-loader'
      }
    ]
  }
};
