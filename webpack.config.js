const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  context: __dirname,
  target: 'web',
  entry: {webpack: './webpack.js'},
  output: {
      path: path.resolve(__dirname, '.'),
      filename: '[name].min.js',
      library: '[name]',
      libraryTarget: 'var',
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['es2015', { modules: false }]
        ],
      },
    }]
  },
  // plugins: [
  //   new UglifyJSPlugin({
  //     uglifyOptions: {
  //       output: {
  //         comments: false,
  //       },
  //     },
  //   }),
  // ],
//  devtool: 'source-map',
}
