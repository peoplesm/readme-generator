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
  return [
    `# ${response.title}
  [![License: ${response.license[0]}](https://img.shields.io/badge/License-${response.license[1]}.svg)](https://opensource.org/licenses/${response.license[2]})

  ## Decription
  ${response.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#test-instructions)
  * [Questions](#questions)

  ## Installation

  ## Usage
  ${response.usage}

  ## License
  This project is licensed under the [${response.license[0]} license](https://opensource.org/licenses/${response.license[2]})

  ## Contributing
  ${response.contributing}

  ## Test Instructions
  ${response.test}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${response.email}. You can view more of my projects at https://github.com/${response.github}.
`,
    `${response.title}`,
  ];
}

module.exports = generateMarkdown;
