// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your Github username");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the title of your project.");
          return false;
        }
      },
    },
    {
      type: "editor",
      name: "description",
      message: "Type a description of your project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please write a description of your project.");
          return false;
        }
      },
    },
    {
      type: "editor",
      name: "installation",
      message: "Explain the steps to install your project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please decribe the installation process.");
          return false;
        }
      },
    },
    {
      type: "editor",
      name: "usage",
      message: "Save a description of how to use your project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description of how to use your project.");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "Choose which license your project has",
      choices: [
        {
          name: "Apache 2.0",
          value: ["Apache 2.0", "Apache_2.0-green", "Apache-2.0"],
        },
        {
          name: "GNU General Public v3.0",
          value: ["GNU General Public v3.0", "GPLv3-blue", "gpl-3.0"],
        },
        { name: "MIT", value: ["MIT", "MIT-blue", "MIT"] },
        {
          name: "BSD 2-Clause 'Simplified'",
          value: [
            "BSD 2-Clause 'Simplified'",
            "BSD_2--Clause-orange",
            "BSD-2-Clause",
          ],
        },
        {
          name: "BSD 3-Clause 'New' or 'Revised'",
          value: [
            "BSD 3-Clause 'New' or 'Revised'",
            "BSD_3--Clause-orange",
            "BSD-3-Clause",
          ],
        },
        {
          name: "Boost Software",
          value: ["Boost Software", "Boost_1.0-lightblue", "BSL-1.0"],
        },
        {
          name: "Eclipse Public 2.0",
          value: ["Eclipse Public 2.0", "EPL_2.0-red", "EPL-2.0"],
        },
        {
          name: "GNU Affero General Public v3.0",
          value: ["GNU Affero General Public v3.0", "AGPL_v3-blue", "agpl-3.0"],
        },
        {
          name: "GNU General Public v2.0",
          value: ["GNU General Public v2.0", "GPL_v2-blue", "gpl-2.0"],
        },
        {
          name: "GNU Lesser General Public v2.1",
          value: [
            "GNU Lesser General Public v2.1",
            "LGPL_v2.1-blue",
            "lgpl-2.1",
          ],
        },
        {
          name: "Mozilla Public 2.0",
          value: ["Mozilla Public 2.0", "MPL_2.0-brightgreen", "MPL-2.0"],
        },
        { name: "None", value: "none" },
      ],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please choose a license.");
          return false;
        }
      },
    },
    {
      type: "editor",
      name: "contributing",
      message:
        "Save a description of the guidelines for contributing to your project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please describe the guidelines to contribute to this project."
          );
          return false;
        }
      },
    },
    {
      type: "editor",
      name: "test",
      message: "Save instructions for testing your project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please write instructions for testing this project.");
          return false;
        }
      },
    },
  ]);
};

const writeFile = (response) => {
  fs.writeFile(`${response[1]}-README.md`, response[0], (err) =>
    err ? console.log(err) : console.log(`Successfully created your README`)
  );
};

questions()
  .then((response) => {
    return markdown(response);
  })
  .then((response) => {
    return writeFile(response);
  })
  .catch((err) => {
    console.log(err);
  });
