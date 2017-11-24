export default {
  entry: './main.js',
  output: {
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
      use: ['style-loader', 'css-loader'],
    }],
  },
};
