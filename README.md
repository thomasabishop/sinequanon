![alt text](src/assets/images/svg/readme-header.svg)

# Sine Qua Non
**A Webpack boilerplate engineered for simple and performant static websites.**

I developed this boilerplate primarily for myself but thought it might be useful for others. The pretentious Latin name means **_without which, not_** which encapsulates the aspiration to provide all the necessities of modern JS website development.

_Corrections, suggestions, pull requests all very much welcome._

### Key features
📦 **Framework agnostic**  

🔃 **Live-reload development server**

💅 **SCSS-compilation and directory structure pre-established** 

🌚 **Use separate non-overwritten CSS, if preferred**

📑 **HTML partials**

🗞️ **JavaScript/CSS minification, compression, bundling**

🕰️ **PostCSS enabled**

💈 **Automated vendor prefixing**

🔪**Automatic removal of unused CSS on build**

🎚️ **Normalize.css**

🖼️ **Lossless image compression (including vectors)**

🍊 **Segmented Webpack config**

🧹 **Automated cache clearing**
    
> Idea for a new feature? See the [Project Board](https://github.com/thomasabishop/sinequanon/projects) for upcoming features or [submit a pull request](https://github.com/thomasabishop/sinequanon/pulls).




## 💾 Installation 

### Prerequisites
* [Node.js](https://github.com/nodejs/node) 
* [npm-cli](https://github.com/npm/cli)

### Install
```bash
npm install

# Installs requisite packages listed. in package.json

```

### Build
```bash
npm run build:prod
# Build generated to /dist directory
```
### Develop
```bash
npm run build:dev 

# Then...
npm start

# Content will be served from localhost:8080
```

## 📦 Specific packages

### Standard utilities

Package/plug-in  | Functionality
------------- | -------------
[`webpack`](https://github.com/webpack/webpack),[`webpack-cli`](https://www.npmjs.com/package/webpack-cli)  |  For `webpack`.
[`webpack-dev-server`](webpack-dev-server) | To serve contents of the development directory (`/src`) during development with live-reloading.
[`cross-env`](https://github.com/kentcdodds/cross-env) | An `npm` package that facilitates different runtime modes (e.g `dev` and `build`).
[`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) | Automatically clears surplus code from the `/dist` (build) directory on `npm run build:prod`
[`webpack-merge`](https://github.com/survivejs/webpack-merge) | Merges config files and collates them, then compresses the resulting file.

### Styling

Package/plug-in  | Functionality
------------- | -------------
[`css-loader`](https://github.com/webpack-contrib/css-loader)  |  Loads CSS to Webpack bundle
[`mini-css-extract`](https://github.com/webpack-contrib/mini-css-extract-plugin) | Extracts all CSS to single hashed build file.
[`sass-loader`](https://github.com/webpack-contrib/sass-loader) | Compiles SCSS to CSS
[`postcss-loader`](https://github.com/postcss/postcss-loader) | Integrates PostCSS
[`autoprefixer`](https://github.com/postcss/autoprefixer) | PostCSS dependency for automatically generating vendor prefixes in CSS
[`postcss-purgecss`](https://github.com/FullHuman/postcss-purgecssr) | PostCSS dependency for automatically removing unused CSS classes and IDs from build stylesheet
[`normalize.scss`](https://github.com/JohnAlbin/normalize-scss) | PostCSS dependency for normalizing CSS output across browsers
[`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) | Minifies CSS in build file

### HTML

Package/plug-in  | Functionality
------------- | -------------
[`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin)  |  Outputs HTML files to build directory.

### JavaScript

Package/plug-in  | Functionality
------------- | -------------
[`uglify-js-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin)  | JavaScript minification.

### Assets

Package/plug-in  | Functionality
------------- | -------------
[`file-loader`](https://webpack.js.org/loaders/file-loader/)  | Pulls images and other static filetypes into the build directory
[`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin)  | Generates asset folder in build directory
[`imagemin-webpack`](https://www.npmjs.com/package/imagemin-webpack-plugin)  | Applies lossless compression to images served from build file. Specific plugins: [`imagemin-gifsicle`](https://www.npmjs.com/package/imagemin-gifsicle), [`imagemin-jpegtran`](https://www.npmjs.com/package/imagemin-jpegtran),[`imagemin-optipng`](https://www.npmjs.com/package/imagemin-jpegtran), [`imagemin-svgo`](https://github.com/imagemin/imagemin-svgo)




## 🎛️ Configuration 

## 🚀 Future features  

I am still tweaking and refining SQN. Please see the [Project Board](https://github.com/thomasabishop/sinequanon/projects) for details of forthcoming additions. 

If you would like to [submit a pull request](https://github.com/thomasabishop/sinequanon/pulls), please feel free.
