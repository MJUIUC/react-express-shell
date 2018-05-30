'use strict';

const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'react-app-source');
const BUILD_DIR = path.resolve(__dirname, 'react-app-build');

const configuration = {

  entry: {
    app: path.resolve(__dirname, 'react-app-source/index.jsx'),
    vendors: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'react-app-build'),
    filename: '[name].js'
  },

  context: path.resolve(__dirname, 'react-app-source'),

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },{
          loader: "less-loader"
        }] 
      },
    ]
  },
  plugins: [new HtmlWebPackPlugin({
    template: path.resolve(APP_DIR, 'index.html'),
  })]
};

module.exports = configuration;
