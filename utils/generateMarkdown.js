// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(response) {
  return `# ${response.title}
  [![License: ${response.license[0]}](https://img.shields.io/badge/License-${response.license[1]}.svg)](https://opensource.org/licenses/${response.license[2]})

  ## Decription
  ${response.description}

  ## Table of Contents
  ${response.tableOfContents}

  ## Usage
  ${response.usage}

  ## Liscense
  ${response.license[0]}

  ## Contributing
  ${response.contributing}

  ## Test Instructions
  ${response.tests}
`;
}

module.exports = generateMarkdown;
