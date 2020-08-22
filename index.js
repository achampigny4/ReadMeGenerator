const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Github user name?",
            name: "userName"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "title"
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
            message: "What are the guilines for a user who wants to contribute? ",
            name: "contribution"
        },
    ]);
};

//init function. async activates await
const init = async () => {
    //this message is displayed when the user begins
    console.log("README Generator \nTo create a README.md file for your project, \nplease answer the following questions:")
    try {
        //user is asked and answered all questions
        const data = await promptUser();
        //data to be put in the markdown
        const md = generateMarkdown(data); 
        //create new file with the data from the users answers 
        await writeFileAsync(`./output/README.md`, md);
        //this message is displayed when the user is finished
        console.log("README file successfully created in the OUTPUT folder!");
    } catch (err) {
        console.log(err);
    };
};

// function call to initialize program
init();

//2. perfect md file template
//      - license
//      - badges
//      - test read me template on github
//      - review readme's on git hub to ensure proper content and
//3. review hw requirments
