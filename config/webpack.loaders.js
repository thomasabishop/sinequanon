const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./site.config');

// Define common loader constants
const sourceMap = config.env !== 'production';

// HTML loaders

const html = {
  test: /\.(html)$/,
  exclude: /html/,
  use: [
    {
      loader: 'html-loader',
      options: {
        interpolate: true,
      },
    },
  ],
};

// Javascript loaders
const js = {
  test: /\.js(x)?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
    'eslint-loader',
  ],
};

// Style loaders
const styleLoader = {
  loader: 'style-loader'
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap,
  },
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('autoprefixer')(),
      /*
      require('postcss-purgecss')({
        content:
        [
          './src/index*.html'
        ]
      }),
      */
    ],
    sourceMap,
  },
};

const css = {
  test: /\.css$/,
  use: [
    config.env === 'production' ? MiniCssExtractPlugin.loader : styleLoader,
    cssLoader,
    postcssLoader,
  ],
};

const sass = {
  test: /\.s[c|a]ss$/,
  use: [
    config.env === 'production' ? MiniCssExtractPlugin.loader : styleLoader,
    cssLoader,
    postcssLoader,
    {
      loader: 'sass-loader',
      options: {
        sourceMap,
      },
    },
  ],
};

// Image loaders
const imageLoader = {
  loader: 'image-webpack-loader',
  options: {
    bypassOnDebug: true,
    gifsicle: {
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    pngquant: {
      quality: '65-90',
      speed: 4,
    },
    mozjpeg: {
      progressive: true,
      quality: 50
    },
    svgo: {
      plugins:
        [
          {
            removeViewBox: false
          }
        ]
    },
    webp: {
      quality: 60
    }
  }
};

const rasterImages = {
  test: /\.(gif|png|jpe?g)$/i,
  exclude: /fonts/,
  use: [
    'file-loader?name=images/[name].[hash].[ext]',
    config.env === 'production' ? imageLoader : null,
  ].filter(Boolean),
};


const vectorImages = {
  test: /\.svg$/i,
  exclude: /fonts/,
  use: [
    'file-loader?name=images/[name].[hash].[ext]',
    config.env === 'production' ? imageLoader : null,
  ].filter(Boolean),
};


const webPImages = {
  test: /\.webp$/i,
  exclude: /fonts/,
  use: [
    'file-loader?name=images/[name].[hash].[ext]',
    config.env === 'production' ? imageLoader : null,
  ].filter(Boolean),
};

// Font loadersq
const fonts = {
  test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
  exclude: /images/,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: '[name].[hash].[ext]',
        outputPath: 'fonts/',
      },
    },
  ],
};

// Video loaders
const videos = {
  test: /\.(mp4|webm)$/,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: '[name].[hash].[ext]',
        outputPath: 'images/',
      },
    },
  ],
};

module.exports = [
  html,
  js,
  css,
  sass,
  rasterImages,
  vectorImages,
  webPImages,
  fonts,
  videos,
];
