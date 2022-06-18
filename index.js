const generateMarkdown = require("./generateMarkdown");

// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "projectTitle",
        message: "What Is The Title Of Your Project?: ",
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("Entry Required");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "What Is The Description Of Your Project?: ",
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Entry Required");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "What Are The Instructions To Install Your Application?: ",
        validate: (installationInput) => {
            if (installationInput) {
                return true;
            } else {
                console.log("Entry Required");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usageInstructions",
        message: "What Are The Instructions To Use Your Application?: ",
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log("Entry Required");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "projectLicense",
        message: "Which License Applies?: ",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        validate: (licenseInput) => {
            if (licenseInput) {
                return true;
            } else {
                console.log("Entry Required");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributionInstructions",
        message: "How Can Contributors Contribute To Your Project?: ",
        validate: (contributionInput) => {
            if (contributionInput) {
                return true;
            } else {
                console.log("Entry Required");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "testInstructions",
        message: "How Can Users Test Your Application?: ",
        validate: (testInput) => {
            if (testInput) {
                return true;
            } else {
                console.log("Entry Required");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "githubInstructions",
        message: "What Is Your Github Username?: ",
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("Entry Required");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "emailInstructions",
        message: "What Is Your Email?: ",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Entry Required");
                return false;
            }
        }
    },
];
// End of questions list

// Prompt User and Write File Function
const promptUser = () => {
    return inquirer.prompt(questions)
};

promptUser()
    .then((data) => {
        const content = generateMarkdown(data);
        console.log(content);
        fs.watchFile("./temp/README.md", content, (err2) => {
            if (err2) {
                console.log(err2);
                return;
            }
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment")
        } else {
            console.log("Error has ocurred");
        }
    });

// User input directs to README, Markdown file.