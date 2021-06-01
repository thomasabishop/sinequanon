const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Specify entrypoint: where Webpack will compile from
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  // Specify output: where Webpack will compile to
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    // Compile HTML from /src to /dist
    new HtmlWebpackPlugin({
      title: 'Sine Qua Non',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    //  Purge the /dist dir before every new build
    new CleanWebpackPlugin(),
    // Add 'update on save' when development server is running
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Inject custom CSS and/or SCSS (from /src/styles.css) into the DOM
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Webpack dev server: allows us to serve the Webpack bundle from memory when you issue `npm start`
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
};
