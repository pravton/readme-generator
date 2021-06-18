// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return '![badge](https://img.shields.io/badge/licence-' + license.replace('-', '%20') + '-green)';
  } else {
    console.log('No license provided');
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    return 'https://choosealicense.com/licenses/' + license.toLowerCase() + '/';
  } else {
    console.log('No license provided');
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return 'This application is covered under the ['+ license +'](' + renderLicenseLink(license) + ') license.'
  }
}

// Function to generate the table of contents
function tableOfContent(data) {
  let usedTools = '';
  let installation = '';
  let usage = '';
  let license = '';
  let contributor = '';
  let tests = '';
  let questions = '';

  if(data.usedLanguagesTools) {
    builtWith = '- [Built With](#built-with)';
  }

  if(data.confirmInstallation) {
    installation = '- [Installation](#%EF%B8%8F-installation)';
  } 
  
  if(data.confirmUsage) {
    usage = '- [Usage](#%EF%B8%8F-usage)';
  }
  
  if(data.confirmLicense) {
    license = '- [License](#-license)';
  }
  
  if(data.confirmContributor) {
    contributor = '- [Contributing](#-contributor)';
  }
  
  if(data.confirmTests) {
    tests = '- [Tests](#-tests)';
  }

  if(data.confirmQuestions) {
    questions = '- [Questions](#-questions)';
  }

  return `
${builtWith} 
${installation}
${usage}
${license}
${contributor}
${tests}
${questions}
  `
};

function genToolsLanguagesSec(data) {
  if(data.usedLanguagesTools) {
    let langArray = data.usedLanguagesTools;
    let languagesTools = '';
    for(let i = 0; i < langArray.length; i++) {
      languagesTools += '![badge](https://img.shields.io/badge/-' + langArray[i] + '-orange) ';
    }

    return `
    ${languagesTools}
    `
  }
}

// Function to generate the installation section
function genInstallationSec(data) {
  if(data.confirmInstallation) {
    return `
## ⚙️ Installation

${data.aboutInstallation}
`
  } else {
      return '';
    }
  };

// Function to create the usage section
function genUsageSec(data) {
  if(data.confirmUsage) {
    return `
## 🖥️ Usage

${data.aboutUsage}
`
  } else {
    return '';
  }
};

// Function to create the lisence section
function genLisenceSec(data) {
  if(data.confirmLicense) {
    return `
## 📝 License

${renderLicenseSection(data.license)}
`
  } else {
    return '';
  }
};

// Function to create the contributor section
function genContributorSec(data) {
  if(data.confirmContributor) {
    return `
## 🧑‍🎨 Contributor

${data.aboutContributor}
`
  } else {
    return '';
  }
};

// Function to create the contributor section
function genTestSec(data) {
  if(data.confirmTests) {
    return `
## 🧪 Tests

${data.aboutTests}
`
  } else {
    return '';
  }
};

// Function to create the questions section
function genQuestionSec(data) {
  if(data.confirmQuestions) {
    return `
## ❓ Questions

If you have any questions regarding this application, please reach out via email or github!

📧 Email : ${data.email}

🤖 GitHub : https://github.com/${data.githubUsername}
`
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.usedLanguagesTools);
  return `
# ${data.projectName}
${renderLicenseBadge(data.license)} ${genToolsLanguagesSec(data)}

## 📜 Description
${data.description}

## 📋 Table Of Contents
${tableOfContent(data)}

${genInstallationSec(data)}

${genUsageSec(data)}

${genLisenceSec(data)}

${genContributorSec(data)}

${genTestSec(data)}

${genQuestionSec(data)}

`
}

module.exports = generateMarkdown;
