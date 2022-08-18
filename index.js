// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "editor",
      name: "description",
      message: "Type a description of your project.",
    },
    {
      type: "editor",
      name: "tableOfContents",
      message: "Save a Table of Contents for your project.",
    },
    {
      type: "editor",
      name: "usage",
      message: "Save a description of the usage of your project.",
    },
    {
      type: "checkbox",
      name: "liscense",
      message: "Check which liscense your project has",
      choices: ["MIT", "Blah", "Third"],
    },
    {
      type: "editor",
      name: "contributing",
      message:
        "Save a description of the guidelines for contributing to your project.",
    },
    {
      type: "editor",
      name: "tests",
      message: "Save instructions for testing your project.",
    },
  ])
  .then((response) => {
    const readmePageContent = markdown(response);
    fs.writeFile(`${response.title}-README.md`, readmePageContent, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
