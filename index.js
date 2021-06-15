// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the project name!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for your project?',
        validate: descInput => {
            if(descInput) {
                return true;
            } else {
                console.log('Please enter a description!')
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'usedLanguagesTools',
        message: 'Select the languages/tools used in the project',
        choices: [
            'HTML',
            'CSS', 
            'Javascript', 
            'Java', 
            'Python', 
            'Ruby', 
            'Node.js', 
            'React', 
            'jQuery', 
            'AngularJS',
        ]
    }, 
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to enter some information about installation?',
        default: false
    },
    {
        type: 'input',
        name: 'aboutInstallation',
        message: 'Provide some information about installation:',
        validate: installationInput => {
            if(installationInput) {
                return true;
            } else {
                console.log('Please enter about Installation!')
                return false;
            }
        },
        when: ({confirmInstallation}) => {
            if (confirmInstallation) {
                return true;
            } else {
                return false;
            }
        }

    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to enter some information about usage?',
        default: false
    },
    {
        type: 'input',
        name: 'aboutUsage',
        message: 'Provide some information about usage:',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please enter about Usage!')
                return false;
            }
        },
        when: ({confirmUsage}) => {
            if (confirmUsage) {
                return true;
            } else {
                return false;
            }
        }

    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to include a license?',
        default: false
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select one of the license:',
        choices: [{
            name: 'GNU AGPLv3',
            value: 'AGPL-3.0'
        },
        {
            name: 'GNU GPLv3',
            value: 'GPL-3.0'
        },
        {
            name: 'GNU LGPLv3',
            value: 'LGPL-3.0'
        },
        {
            name: 'Mozilla Public License 2.0',
            value: 'MPL-2.0'
        },
        {
            name: 'Apache License 2.0',
            value: 'Apache-2.0'
        },
        {
            name: 'MIT License',
            value: 'MIT'
        },
        {
            name: 'Boost Software License 1.0',
            value: 'BSL-1.0' 
        },
        {
            name: 'The Unlicense',
            value: 'Unlicense'
        }],        
        when: ({confirmLicense}) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }

    },
    {
        type: 'confirm',
        name: 'confirmContributor',
        message: 'Would you like to enter some information about contributors?',
        default: false
    },
    {
        type: 'input',
        name: 'aboutContributor',
        message: 'Please enter the contributors names:',
        validate: contributorInput => {
            if(contributorInput) {
                return true;
            } else {
                console.log('Please enter about contributors!')
                return false;
            }
        },
        when: ({confirmContributor}) => {
            if (confirmContributor) {
                return true;
            } else {
                return false;
            }
        }

    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to enter some information about tests?',
        default: true
    },
    {
        type: 'input',
        name: 'aboutTests',
        message: 'Provide some information about tests:',
        validate: testsInput => {
            if(testsInput) {
                return true;
            } else {
                console.log('Please enter about tests!')
                return false;
            }
        },
        when: ({confirmTests}) => {
            if (confirmTests) {
                return true;
            } else {
                return false;
            }
        }

    },
    {
        type: 'confirm',
        name: 'confirmQuestions',
        message: 'Would you like to enter your contact information for questions?',
        default: true
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter your email address')
                return false;
            }
        },
        when: ({confirmQuestions}) => {
            if (confirmQuestions) {
                return true;
            } else {
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github Username?',
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('Please enter your github Username')
                return false;
            }
        },
        when: ({confirmQuestions}) => {
            if (confirmQuestions) {
                return true;
            } else {
                return false;
            }
        }
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/' + fileName + '.md', data, err => {
        if (err) {
            reject(err);
            return;
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt(questions);
}

// Function call to initialize app
init()
    .then(answers => {
        console.log(answers);
        return generateMarkdown(answers);
    })
    .then(content => {
        return writeToFile('README', content)  
    });
