const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");


module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].[chunkhash].js'
    },
    resolve: { extensions: ['.js', '.ts'] }, 
    module: {
        rules: [
          {
            test: [/.css$|.scss$/],
            use: [
                {
                loader: MiniCssExtractPlugin.loader
                },
                'css-loader',
                'sass-loader',
                'postcss-loader'
            ],
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images'
                    }
                },
            ],
        }
        ],
      },
    plugins: [
        
        new HtmlWebpackPlugin({
            title: 'Flexbox Toolkit',
            template: './src/html/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[chunkhash].css'
        }),
        new CopyWebpackPlugin([
            { 
            from: './src/assets/images/*',
            to: 'assets/images'
            }
        ]),
        new ImageminPlugin({
            bail: false,
            cache: true,
            imageminOptions: {
                plugins: [
                    ["gifsicle", {interlaced: true}],
                    ["jpegtran", {progressive: true}],
                    ["optipng", { optimizationLevel: 5 }],
                    [
                        "svgo",
                        {
                            plugins: [
                                {
                                    removeViewBox: false
                                }
                            ]
                        }
                    ]
                ]
            }
        }),
        new CleanWebpackPlugin(),
    ]
  };
