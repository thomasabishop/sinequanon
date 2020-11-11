const path = require('path');
const fs = require('fs');

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

const config = {
  site_name: 'Sine Qua Non',
  site_description: 'A Webpack boilerplate for modern Javascript development',
  site_url: 'https://www.example.com',
  googleAnalyticsUA: '',
  viewport: 'width=device-width,initial-scale=1',
  favicon: path.join(ROOT, '/src/images/favicon.png'),
  // Local development URL
  dev_host: 'localhost',
  // Local development port
  port: process.env.PORT || 8000,

  // Advanced configuration, edit with caution!
  env: process.env.NODE_ENV,
  root: ROOT,
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  },
  package: JSON.parse(
    fs.readFileSync(path.join(ROOT, '/package.json'), { encoding: 'utf-8' }),
  ),
};

module.exports = config;
