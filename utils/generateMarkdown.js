//create badge
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }  return ''
};

//create license
function renderLicense() {

};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ---
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ---
  
  ${data.description}
  
  ## Table of Contents:
  
  *[Description](#description)
  *[Usage](#usage)
  *[License](#license)
  *[Installation](#installation)
  *[Test](#test)
  *[Contribution](#contribution)
  *[Questions](#questions)
  
  ---
  
  ## Application use:
  
  ${data.usage}
  
  ## License:
  
  ${renderLicense(data.license)}
  
  ## Installation:
  
  ${data.installation}
  
  ## Test:
  
  ${data.test}
  
  ## Contribution:
  
  Guidlines to contribute:
  
  ${data.contribution}
  
  ## Questions:
  
  Please contact me if you have any questions.
  email: ${data.email}
  github: [${data.userName}](www.github.com/${data.userName})
  
      `;
}

module.exports = generateMarkdown;
