const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const { prompt } = require('enquirer');

async function runSetup() {
  clear();
  console.log(chalk.blue(figlet.textSync('Sine Qua Non', {})));

  const userOptions = await prompt([
    {
      type: 'input',
      name: 'project_name',
      message: 'What would you like to call your project?',
      initial: 'sine-qua-non',
    },
    {
      type: 'input',
      name: 'site_description',
      message: 'Provide a short description of your project',
      initial: 'A Webpack boilerplate...',
    },
    {
      type: 'input',
      name: 'site_repository',
      message: 'What is the Git repo URL for your project?',
      initial: 'https://www.example.com',
    },
    {
      type: 'input',
      name: 'site_live',
      message: 'What is the live or staging URL of your project?',
      initial: 'https://www.example.com',
    },
    {
      type: 'select',
      name: 'use_css',
      message: 'Would you like to use CSS?',
      choices: ['Yes', 'No'],
    },
    {
      type: 'select',
      name: 'use_scss',
      message: 'Would you like to use SCSS?',
      choices: ['Yes', 'No'],
    },
    {
      type: 'select',
      name: 'use_bootstrap',
      message: 'Do you wish to install Bootstrap(5)?',
      choices: ['Yes', 'No'],
    },

    {
      type: 'select',
      name: 'use_bootstrap',
      message: 'Do you wish to use TypeScript?',
      choices: ['Yes', 'No'],
    },
  ]);
}

runSetup();
