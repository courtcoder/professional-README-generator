// TODO: Create a function that returns a license badge based on which license is passed in
// license choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else if (!license) {
    return "";
  } else {
    return `![License Badge](https://img.shields.io/badge/license-${license}-ff69b4)`;
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
  console.log(data.projectTitle);
  let license = data.projectLicense;
  return `# ${data.projectTitle}
  ${renderLicenseBadge(license)}
  
## Table Of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
${renderLicenseLink(license)}
- [Tests](#tests)
- [Questions](#questions)


## Description  
  ${data.description}

## Installation  
  ${data.installationInstructions}
 
## Usage  
${data.usageInstructions}

## Contribution  
  ${data.contributionInstructions}
 
## Tests
  ${data.testInstructions}
  
## Questions  
If you have any with additional questions reach out to me at:  
  * [${data.emailInstructions}](${data.emailInstructions})  
  * [github.com/${data.githubInstructions}](https://github.com/${
    data.githubInstructions
  })  
  
  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
