const inquirer = require("inquirer");
const { type } = require("os");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your projects name?",
            name: "project"
        },
        {
            type: "input",
            message: "Description of your project: ",
            name: "description"
        },
        {
            type: "input",
            message: "Table of Contents: ",
            name: "tableContents"
        },
        {
            type: "input",
            message: "Installation?",
            name: "installation"
        },
        {
            type: "input",
            message: "What is your project usage?",
            name: "usage"
        },
        {
            type: "input", //select?
            message: "Licensing? ",
            name: "license"
        },
        {
            type: "input",
            message: "Who contributed to the project? ",
            name: "contributors"
        },
        {
            type: "input",
            message: "Tests: ",
            name: "tests"
        },
        {
            type: "input",
            message: "Questions for developer: ",
            name: "questions"
        },
    ]);

    // array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
