import path from 'path';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default {
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/,
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
      exclude: /(node_modules)/,
    }, {
      test: /\.scss$/,
      loader: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './index.html' }]),
    new UglifyJsPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
