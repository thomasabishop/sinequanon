const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrettierPlugin = require('webpack-prettier-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const paths = require('./paths')

module.exports = {
  // Specify entrypoint: where Webpack will compile from
  entry: [paths.src + '/index.js'],
  // Specify output: where Webpack will compile to
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    //  Purge the /dist dir before every new build
    new CleanWebpackPlugin(),
    // Compile HTML from /src to /dist
    new HtmlWebpackPlugin({
      title: 'Sine Qua Non',
      template: paths.src + '/template.html',
      filename: 'index.html', // output index.html to /dist
    }),
    // ES Lint config
    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),
    // Prettier config

    // Prettier configuration
    new PrettierPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Images (using types not loaders): copy to build dir
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
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
    },
  },
}
