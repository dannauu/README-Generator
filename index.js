// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input


function promptUser(){
    return inquirer.prompt([
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'Username',
    }, 
    {
        type: 'input',
        message: 'What is the name of your github repository?',
        name: 'Repository',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'ProjectName',
    },
    {
        type: 'input',
        message: 'Enter a description for your project:',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Enter the steps required to install your project:',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples of your project in use for the usage section:',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Enter how other developers can contribute to your project?',
        name: 'Contribute',
    },
    {
        type: 'input',
        message: 'Enter any tests written for your project and how to run them:',
        name: 'Tests',
    },
    {
        type: 'list',
        message: 'Choose a license for your project:',
        choices: ['Apache', 'GPL', 'Eclipse', 'MIT', 'none'],
        name: 'License',
    }
])
};

async function init() {
    try {
        const answers = await promptUser();
        const formContent =  generateMarkdown(answers);
        await writeFileAsync('README.md', formContent);
        console.log('Successfully wrote README')
    } catch(err) {
        console.log(err);
    }
}

init();
