![alt text](src/images/vectors/sqn-logo-banner.svg)

# Sine Qua Non
**A boilerplate for modern Javascript development.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

I developed this environment for building static websites and basic web applications. It is built with Webpack 4 with Gulp 4 for ancillary tasks. I use it as a base layer for most of my Javascript projects. 

The pretentious Latin name means **_without which, not_**.  This encapsulates my aspiration to provide all the necessities of modern JS development in a single repository. 

Bootstrap 5 is used as the framework simply because it suits my average use case (prototyping, basic SPA apps). It can of course be easily repursposed to work with React and chums.  

I have listed it publicly to demonstrate my facility with modern web development tools.

## Key features

### Development
* Babel transpilation from ES6+ to ES5
* Modularised SCSS compilation to CSS
* Bootstrap 5 
* Config written in Node `cross-env` for maximal compatibility accross environments
* Development server with hot-reloading
* EJS variables injected for repeatable site content 
* HTML partials for basic templating

### Production
* HTML, CSS, JS minification, compression
* PostCSS purging of unused styles 
* PostCSS auto-prefixing 
* Raster and vector automated image compression
* `.webp` image generation 
* Lazy loading of images 
* Hashed asset files for cache-busting 
* Distribution server for inspection of the production build

* Automated `sitemap.xml` generation for SEO
* Automated `robots.txt` generation for SEO
* Automated injection of Schema structured data
* Automated favicon generation matching all device variants

### Deployment

* FTP server deployment or Netlify (template files exist for whichever mode chosen)
* Optional **Single File Mode** distribution output where all content and assets are reduced to a single `.html` file 


## Pipeline

### Pusa Variant

* Launch Express server postbuild for Single File Mode 

### Fixes
* Refine `purge-css` so that Bootstrap `transition` classes are not purged, whilst still keeping output as minimal as possible
* ~~Stop partials being treated as standalone pages, e.g. `/nav.html`. Perhaps resolve with EJS template mode using `html-webpack-plugin`, or else use Handlebars.~~

### Features
* Add responsive image sizing using Gulp
* Handle `.webp` generation using Gulp for consistency
* Add fallback image functionality and pixelisation before load to reduce initial load time
* ~~Create optional **Single File Mode** via a Gulp task. This will inject all bundles and assets into a single `.html` file for client circumstances that require it.~~
* Add JSON structured data to head (from template) for SEO purposes.

### Build optimisation
* Set up tree-shaking
* Make use of bundle-splitting and lazy loading of chunks to reduce initial load times and help in caching vendor packages that change infrequently
* Partition native and vendor bundles


### Functional improvements

* ~~Create dedicated `/html/` subdirectory for partials~~
* Create a page dedicated to Webpack build stats to indicate heavy files at a glance. 