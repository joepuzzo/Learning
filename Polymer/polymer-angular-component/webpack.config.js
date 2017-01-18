var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: ["./app/app.module.js"],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /(\.css)$/,
        loader: "style-loader!css-loader"
      },
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
