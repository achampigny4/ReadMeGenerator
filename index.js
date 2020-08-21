const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const path = require("path"); //TODO path to generateMardown.js
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
    ])
};

//template
// // function writeToFile(data) {
// //     return `# ${data.title}

// // ---

// // $ {data.license} BADGE GOES HERE

// // ## Description

// // ---

// // ${data.description}

// // ## Table of Contents:

// // *[Description](#description)
// // *[Usage](#usage)
// // *[License](#license)
// // *[Installation](#installation)
// // *[Test](#test)
// // *[Contribution](#contribution)
// // *[Questions](#questions)

// // ---

// // ## Application use:

// // ${data.usage}

// // ## License:

// // ${data.license}

// // ## Installation:

// // ${data.installation}

// // ## Test:

// // ${data.test}

// // ## Contribution:

// // Guidlines to contribute:

// // ${data.contribution}

// // ## Questions:

// // Please contact me if you have any questions.
// // email: ${data.email}
// // github: [${data.userName}](www.github.com/${data.userName})

// //     `;
// };

//init function. async activates await
const init = async () => {
    //this message is displayed when the user begins
    console.log("README Generator \nTo create a README.md file for your project, \nplease answer the following questions:")
    try {
        //user is asked and answered all questions
        const data = await promptUser();
        //data to be put in the markdown
        const md = writeToFile(data); //TODO: The "path" argument must be of type string. Received an instance of Object
        //create new file with the data from the users answers 
        await writeFileAsync(`./utils/README.md`, generateMarkdown(md)); //TODO
        //this message is displayed when the user is finished
        console.log("README file successfully created!");
    } catch (err) {
        console.log(err);
    };
};

// function call to initialize program
init();

// function to write README file to template on generateMarkdown.js file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); //TODO
};


//1. move file template to generateMarkdown.js which was provided for the hw (TODO)
//2. perfect md file template
//      - license
//      - badges
//      - test read me template on github
//      - review readme's on git hub to ensure proper content and
//3. review hw requirments
