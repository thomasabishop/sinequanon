![alt text](src/images/sqn-logo-banner.svg)
[![wakatime](https://wakatime.com/badge/github/thomasabishop/sinequanon.svg)](https://wakatime.com/badge/github/thomasabishop/sinequanon)
[![Tests](https://github.com/thomasabishop/sinequanon/actions/workflows/run-tests.yml/badge.svg)](https://github.com/thomasabishop/sinequanon/actions/workflows/run-tests.yml)
[![Build](https://github.com/thomasabishop/sinequanon/actions/workflows/run-build.yml/badge.svg)](https://github.com/thomasabishop/sinequanon/actions/workflows/run-build.yml)
# Sine Qua Non

**A Webpack boilerplate for use as a foundation for frontend web applications**

I developed this environment for building static websites and basic web applications with Webpack 5.

The grandiose name means **_without which, not_**. This encapsulates my goal to provide the basic level of tooling I need for most small projects in a single repository.

## Main features

- Local development server (`npm start`)
- Optimised config for production (`npm run build`)
- [Babel](https://github.com/babel/babel) JavaScript transpilation
- CSS bundling
- SCSS transpilation and bundling
- CSS autoprefixing
- Purge unused CSS
- Inline injection of fonts and SVGs
- Image loading (but no compression, sizing or optimisation as such).
- [ESLint](https://github.com/eslint/eslint) on save
- [Jest](https://github.com/facebook/jest) for unit testing.

## To do
- Add Node script that runs on install so that the site config settings can be set on via the terminal rather doing it manually.