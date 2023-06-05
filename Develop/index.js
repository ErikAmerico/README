// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {
    generateMarkdown,
} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'Mozilla 2.0', 'None'],
        default: 'None',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your Github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your Email:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Successfully created ${fileName}!`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((answers) => {
            const READMECONTENT = generateMarkdown(answers);
            writeToFile('README.md', READMECONTENT)
        });
}

// Function call to initialize app
init();
