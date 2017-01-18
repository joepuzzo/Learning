module.exports = {
  context: __dirname + "/src",
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  }
}
