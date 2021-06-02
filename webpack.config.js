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
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html', // output index.html to /dist
    }),
    //  Purge the /dist dir before every new build
    new CleanWebpackPlugin(),
    // Ensure that 'update on save' only updates what has changed, not entire bundle
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
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // Images (using types not loaders)
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Inline injection of fonts and vector images
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
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
