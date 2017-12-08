import path from 'path';

import CopyWebpackPlugin from 'copy-webpack-plugin';

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
      use: [{
        loader: 'style-loader', // creates style nodes from JS strings
      }, {
        loader: 'css-loader', // translates CSS into CommonJS
      }, {
        loader: 'sass-loader', // compiles Sass to CSS
      }],
    }],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './index.html' }]),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
