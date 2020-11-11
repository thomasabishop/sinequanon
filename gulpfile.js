const { series, src, dest } = require('gulp');
const merge = require('merge-stream');
const del = require('del');
const inject = require('gulp-source-injector');
const injectPartials = require('gulp-inject-partials');
const rename = require("gulp-rename");


/* Execute Single File Mode distribution */
const webpackDist = 'dist/';
const sfmDist = 'dist_single_file_mode/';

const cleanDirectory = () => del('dist_single_file_mode/*');

const gatherSrcFiles = function()
{
  const html = src(`${webpackDist}/index.html`)
    .pipe(dest(sfmDist));
  const js = src(`${webpackDist}/*.js`)
    .pipe(rename('index.js'))
    .pipe(dest(sfmDist));
  const css = src(`${webpackDist}/*.css`)
    .pipe(rename('index.css'))
    .pipe(dest(sfmDist));
  return merge(html,js, css);
}

const injectSrcInline = function()
{
  return src(`${sfmDist}/index.html`)
  .pipe(inject())
  .pipe(dest(sfmDist));
}

const removeAuxFiles = () => del(`${sfmDist}/*.{css,js}`);

exports.sfm = series(cleanDirectory,gatherSrcFiles, injectSrcInline, removeAuxFiles);


/* Merge HTML partials into single index file  */

const targetDir = 'src/';
const webpackHtmlIndex = 'src/index.html'
const partialHtmlIndex = 'src/html/index.html';

const bustCache = () => del(webpackHtmlIndex); 

const concatHtmlPartials = function()
{
  return src(partialHtmlIndex)
  .pipe(injectPartials())
  .pipe(dest(targetDir));
}

exports.htmlConcat = series(bustCache, concatHtmlPartials);
