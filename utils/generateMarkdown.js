// TODO: Create a function that returns a license badge based on which license is passed in
// license choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  //if none then null return, else this
  if (license === "none") {
    return "";
  } else if (!license) {
    return "";
  } else {
    //add code to make it an image
    return `![License Badge ${license}](https://img.shields.io/badge/license-${license}-ff69b4)`;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else if (!license) {
    return "";
  } else {
    return `- [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else if (!license) {
    return "";
  } else {
    return `## License  
    info: The License ${license} Was Used For This Application.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.projectLicense;
  return `# ${data.projectTitle}
  ${renderLicenseBadge(license)}
  
## Table of Contents:
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  ${renderLicenseLink(license)}
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [Questions](#Questions)


## Description  
  ${data.description}

## Installation  
  ${data.installation}
 
## Usage  
${data.usage}

## Contribution  
  ${data.contribute}
 
## Tests  
  ${data.test}
  
## Questions  
If you have any with additional questions reach out to me at:  
  * [${data.email}}](${data.email})  
  * [github.com/${data.github}}](https://github.com/${data.github})  
  
  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
