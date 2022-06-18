// TODO: Create a function that returns a license badge based on which license is passed in
// license choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  if (license === "none") {
    return "";
  } else if (!license) {
    return "";
  } else {

    return `![License Badge ${license}](https://img.shields.io/badge/license-${license}-ff69b4)`;
  }
}

function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else if (!license) {
    return "";
  } else {
    return `- [License](#license)`;
  }
}


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
