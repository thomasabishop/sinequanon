![alt text](src/assets/images/svg/sqn-logo-banner.svg)

# Sine Qua Non
**A Webpack boilerplate engineered for simple and performant static websites.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

I developed this boilerplate primarily for myself but thought it might be useful for others. The pretentious Latin name means **_without which, not_** which encapsulates the aspiration to provide all the necessities of a JS-based static website build.

_Corrections, constructive criticism, suggestions, pull requests all very much welcome._

### Key features
📦 **Framework agnostic**  

🔃 **Live-reload development server**

💅 **SCSS-compilation and directory structure pre-established** 

🌚 **Use separate non-overwritten CSS, if preferred**

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
* [Webpack](https://webpack.js.org/guides/installation/)

### Install
```
git clone https://github.com/thomasabishop/sinequanon.git
cd /quotient
npm install
```
### Run development server
```
npm run build:dev 
npm start
```

### Run build
```
npm run build:prod
```
Each time `npm run build:prod` is run, it will automatically clear the previous build and remove any surplus files/hashed chunks. 

## 🎛️ Configuration 

### Update `package.json`
You will want to update the file `package.json` so that it reflects your own site's data. Key fields to change: 
* `name`
* `version`
* `description`
* `repository`
* `author`
* `license` 

You may also want to remove the packages you do not want to use. Don't delete them from `package.json` as it will be overwritten, just run:
```
npm uninstall [package-name] [package-name] [package-name]
npm run build:prod
```
This will automatically uninstall the packages and update `package.json`

### Update `git` credentials
You will want to set your own upstream repository:

```
git remote show origin
// https://github.com/thomasabishop/sinequanon.git

git remote set-url origin [your_repos_github_address]
```

Or edit `.git/config` andi change the URLs there.

You may like to run `git clean -f -d` after changing your config.

### Import your site's assets 
When working in development mode, the `/src` directory is the home of all your content. You can rearrange this to your liking but the default directory structure is as follows:
```
├───/src
|    ├── /assets
|    |    ├── /images
|    |    |   ├── /png
|    |    |   ├── /jpg
|    |    |   ├── /gif
|    |    |   ├── /svg
|    |    |_  |   ├── sqn-logo-banner.svg
|    |        |_  ├── sqn-logo.svg
|    |    ├── /styles
|    |    |    ├── /css
|    |    |    |   ├── style.css
|    |    |    ├── /scss
|    |    |    ├── main.scss
|    |    |    |    ├── /base
|    |    |    |    |   ├── _extensions.scss
|    |    |    |    |   ├── _mixins.scss
|    |    |    |    |   ├── _variables.scss
|    |    |    |    ├── /components
|    |    |    |    |   ├── _buttons.scss
|    |    |    |    |   ├── _grid.scss  
|    |    |    |    |   ├── _images.scss
|    |    |    |    |   ├── _navigation.scss
|    |    |    |    |   ├── _sections.scss
|    |    |    |    |   ├── _typography.scss
|    |_   |_   |_   ├── /normalise
├─ index.html
├─ index.js
...
```
#### Styling
You can use SCSS or CSS for your styling. The `style.css` file will not be overwritten so you can opt to just use CSS; use the established Sass structure; or develop your own Sass structure.
You can also use `main.scss` and `style.css` interchangeably if you like. 

By default, SQN will remove any unused CSS classes from the built project, to boost performance. You can alter the PostCSS settings in `/webpack-config/webpack.dev.config.js` if you do not want this feature.

#### Static assets
All static assets like images, pdfs etc should be saved to `/assets`. They will be bundled and pulled into `/dist` thanks to `file-router`. 

If you make changes to the directory structure, you may need to also update the Webpack configuration files stored in `/webpack-config`. [More info]().

### index.html

This is where you write your HTML.
> I am hoping to add support for HTML partials in the next release. 


### index.js
Along with the `.js` files in `/webpack-config`, this is the main file you use to control the build behaviour.
In the default set-up, it imports CSS and SCSS:
```js
import './styles/css/style.css';
import './styles/scss/main.scss';
```
#### Images
The `index.js` file is also where you import the images you wish to refer to in HTML. It is designed to work on a file-by-file basis to help performance.

First you must import your image into `index.js`:
```js
import sqn_logo from './assets/images/svg/sqn-logo.svg'; 
```
Then use vanilla JS to apply the image to the HTML `<img>` class:
```js
document.getElementById( 'site-logo' ).setAttribute( 'src', sqn_logo );
```

After this, you can go ahead and write your HTML, without worrying about setting an `src` path as the JS takes care of it, e.g:
```html
<img id = "site-logo" alt = "The logo of Sine Qua Non" />
```
This will output to the built `dist/index.html` as:

```html
<img id = "site-logo" src = "assets/images/sqn-logo.svg">
```

> N.B. Although image handing in dev mode is piecemeal, the images are served from a collective assets folder in the built version, not as single requests.

### Webpack settings
The Webpack configuration has been partitioned into three separate files:

File  | Location | Purpose |
------| -------- | ---------
`webpack.config.js` | `./webpack.config.js` | Directs Webpack behaviour to specific config file in `/webpackconfig` directory based on build mode.
`webpack.common.config.js` | `./webpack-config/webpack.common.config.js` | The main config file with operations for both build and development mode.
`webpack.dev.config.js` | `./webpack-config/webpack.dev.config.js` | Handles operations specific to development mode.
`webpack.prod.config.js` | `./webpack-config/webpack.prod.config.js` | Handles operations specific to build mode.

This partitioning helps to keep things organised and logical but you can revert to single `webpack.config.js` at root if you prefer. You will need to update the `scripts` property in the `package.json` to reflect the changed Webpack entry and exit points.

## 📦 Specific packages
This section details the specific Webpack packages and NPM plugins that make up _SQN_. 

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






## 🚀 Future features  

I am still tweaking and refining _SQN_. Please see the [Project Board](https://github.com/thomasabishop/sinequanon/projects) for details of forthcoming additions. 

If you would like to [submit a pull request](https://github.com/thomasabishop/sinequanon/pulls), please feel free.

## 🆘 Help and assistance
I would really like people to make use of this repo and get the most out of it. If you run into any difficulties don't hesitate to [raise an issue]() or email me directly at `tactonbishop[at]gmail.com` 😀