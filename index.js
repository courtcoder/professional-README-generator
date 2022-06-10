// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
const promptUser = () => {
// function to obtain 
// ask for title, description, installation instructions
// usage instructions, license, contribution instructions, tests
// github username, email address
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?: ',
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Describe your project. (Required): ',
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'What are the instructions for installing your application? \n\n',
        },
        {
            type: 'list',
            
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = async () => {
    let userInput = await promptUser();
    console.log(userInput);
};

// Function call to initialize app
init();


// user input => direct to specific places on the README => write that as a markdown file
