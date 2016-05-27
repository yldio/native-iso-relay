var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#cheap-module-source-map',
  entry: path.resolve(__dirname, 'src', 'client.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: [
          path.resolve(__dirname, "src/components/**/*.ios.js"),
          path.resolve(__dirname, "src/components/**/*.android.js"),
          /node_modules/
        ]
      },
    ]
  },
  plugins: [
   new webpack.DefinePlugin({
     'process.env.NODE_ENV':  JSON.stringify(process.env.NODE_ENV),
   }),
   new webpack.ProvidePlugin({
     React: "react",
     "window.React": "react"
   }),
  ],
  externals: {
    'react-native': 'React',
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js', '.jsx', '.json'],
  },
};
