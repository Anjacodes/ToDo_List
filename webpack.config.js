const path = require('path');
const HmtlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HmtlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html'
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