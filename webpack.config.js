module.exports = {
  entry: './TodoList.js',
  output: { 
    path: __dirname + '/build/', 
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map',
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
};