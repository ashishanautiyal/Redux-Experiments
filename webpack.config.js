var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=react-hmre&plugins[]=transform-object-rest-spread,plugins[]=transform-decorators-legacy'],
        exclude: /(node_modules|.cache)/,
        include: __dirname
      }
    ]
  }
}
