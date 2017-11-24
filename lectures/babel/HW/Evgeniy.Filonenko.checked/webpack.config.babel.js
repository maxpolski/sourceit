import path from 'path';

export default {
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/,
    },
    {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
      exclude: /(node_modules)/,
    }],
  },
  watch: true,
};
