// function that returns an array if none is selected on the license question
function renderLicenseBadge(license) {
  if (license === "none") {
    return ["no", "None-red", ""];
  } else {
    return license;
  }
}

//function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "none") {
    return "No License";
  } else {
    return `This project is licensed under the [${license[0]} license](https://opensource.org/licenses/${license[2]})`;
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(response) {
  let license = renderLicenseBadge(response.license);
  let licenseSection = renderLicenseSection(response.license);
  console.log(license);
  return [
    `# ${response.title}
  [![License: ${license[0]}](https://img.shields.io/badge/License-${license[1]}.svg)](https://opensource.org/licenses/${license[2]})

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
  ${response.installation}

  ## Usage
  ${response.usage}

  ## License
  ${licenseSection}
  
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
