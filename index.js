const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
// const questions = inquirer.prompt([
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your project's name?",
            name: "project"
        },
        {
            type: "list",
            message: "What licensing does your preject require? ",
            name: "license",
            choices: [
                "MIT",
                "",
                "",
            ]
        },
        {
            type: "input",
            message: "Description of your project: ",
            name: "description"
        },
        // {
        //     type: "input",
        //     message: "Table of Contents: ",
        //     name: "tableContents"
        // },
        {
            type: "input",
            message: "What does your project provide for user's?",
            name: "usage"
        },
        {
            type: "list",
            message: "Command to install: ",
            name: "installation",
            choices: ["npm i"],
            default: "npm i"
        },
        {
            type: "input",
            message: "Command to run tests: ",
            name: "test",
            choices: ["npm test"],
            default: "npm test"
        },
        {
            type: "input",
            message: "Who contributed to the project? ",
            name: "contributors"
        },
        // {
        //     type: "input",
        //     message: "Questions for developer: ",
        //     name: "questions"
        // },
    ])
};


// function to write README file
// function writeToFile(fileName, data) {
function writeToFile(data) {
    return `THIS IS A TEMP> PLACE MD TEMPLATE HERE< 
    ${data.project} ${data.license} ${data.description}`;
}

const init = async () => {
    try {
        const data = await promptUser();
        const md = writeToFile(data);
        await writeFileAsync("readMe.md", md);
        console.log("ReadMe.md file successfully created!");

    } catch (err) {
        console.log(err);
    };
};

// function to initialize program
// function init() {
// }

// function call to initialize program
init();
