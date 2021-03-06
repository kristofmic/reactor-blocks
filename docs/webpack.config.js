const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPlugin = new webpack.DefinePlugin({
  'process.env': {
    BROWSER: JSON.stringify(true),
    BABEL_ENV: JSON.stringify(true),
  },
});

const common = {
  entry: {
    docs: path.join(__dirname, 'client', 'entry.js')
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
    alias: {
      'reactor-blocks': path.resolve(__dirname, '..'),
      // aliasing this so the components don't pull a duplicate versions
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
      'react-router': path.resolve(__dirname, 'node_modules', 'react-router'),
      'react-transition-group': path.resolve(__dirname, 'node_modules', 'react-transition-group'),
      'prop-types': path.resolve(__dirname, 'node_modules', 'prop-types'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => ([
                  require('autoprefixer')({ browsers: ['last 3 versions'] }),
                ]),
              },
            },
          ],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => ([
                  require('autoprefixer')({ browsers: ['last 3 versions'] }),
                ]),
              },
            },
          ],
        }),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader:
        'url-loader?limit=10000&mimetype=application/font-woff&name=font/[hash].[ext]&publicPath=/public/',
      },
      {
        test: /\.(ttf|otf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?|(woff)$/,
        loader: 'file-loader?name=font/[hash].[ext]&publicPath=/public/',
      },
      {
        test: /\.(jpg|gif|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=img/[hash].[ext]&publicPath=/public/',
      },
    ],
  },
  plugins: [
    buildPlugin,
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['runtime'],
    }),
    new ExtractTextPlugin('css/[name].bundle.css'),
    new HtmlWebpackPlugin({
      title: 'Reactor Blocks',
      template: path.join(__dirname, 'client', 'templates', 'client.ejs'),
    }),
  ],
};

module.exports = common;
