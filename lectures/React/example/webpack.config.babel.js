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
    }],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './index.html' }]),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
};
