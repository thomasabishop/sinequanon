const purgecss = require('@fullhuman/postcss-purgecss');

plugins: [
  require('autoprefixer'),
  purgecss({
    content: ['./src/**/*.html'],
  }),
];
