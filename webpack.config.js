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
    filename: ''
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
        use: {
          loader: "less-loader"
        } 
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebPackPlugin()]
};

module.exports = configuration;
