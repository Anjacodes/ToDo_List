const path = require('path');
const HmtlWebpackPlugin = require('html-webpack-plugin');
// const { check } = require('lockfile');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js', './src/status.js', './src/check.js'],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HmtlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
