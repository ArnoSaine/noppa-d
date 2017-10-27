const HtmlWebpackPlugin = require('html-webpack-plugin');
const template = require('html-webpack-template');
const { resolve } = require('path');
const OfflinePlugin = require('offline-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const baseHref = '/noppa-d/';
const publicPath =
  process.env.npm_lifecycle_event === 'bundle' ? '' : '/build/';

module.exports = {
  output: { publicPath },
  devServer: {
    proxy: {},
    historyApiFallback: { index: publicPath }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template,
      baseHref,
      title: 'Noppa D',
      meta: [
        { name: 'theme-color', content: '#ffa500' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        }
      ]
    }),
    new OfflinePlugin(
      process.env.npm_lifecycle_event === 'bundle'
        ? { publicPath: baseHref }
        : {}
    ),
    new WebpackPwaManifest({
      name: 'Noppa D',
      short_name: 'Noppa D',
      description: 'Formula D Dice Roller – Progressive Web App with React',
      background_color: '#ffa500',
      display: 'fullscreen',
      icons: [
        {
          src: resolve('images/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ]
};
