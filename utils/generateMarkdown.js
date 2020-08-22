//markdown file template for user's input
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  [![${data.license}](https://img.shields.io/badge/License-${data.license}-green.svg)](https://opensource.org/licenses/${data.license})
  
  ## Description
  
  ---
  
  ${data.description}
  
  ## Table of Contents:

  ---
  
  *[Description](##Description)

  *[Application Use](##usage)

  *[Installation](##Installation)

  *[Test](##Test)

  *[License](##License)

  *[Contribute](##Contribute)

  *[Contact Developer](##Questions)
  
  ## Usage:

  ---
  
  ${data.usage}

  ## Installation:

  ---

  How to install:
  
  ${data.installation}
  
  ## License:

  ---
  
  [${data.license}](https://opensource.org/licenses/${data.license})

  
  ## Test:

  ---

  How to test application:

  ${data.test}
  
  ## Contribution:

  ---
  
  Guidlines to contribute:

  ${data.contribution}

  ## Questions:

  ---
  
  Please contact me if you have any questions.
 
  email: ${data.email}
  
  github: [${data.userName}](www.github.com/${data.userName})
  
      `;
}

module.exports = generateMarkdown;
