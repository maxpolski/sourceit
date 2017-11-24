module.exports = {
  entry: './script.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: { presets: ['es2015'] },
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
};
