// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if(license) {
    return 'https://img.shields.io/badge/licence-' + license + '-green';
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
    return 'This application is covered under the ['+ license +'] (' + renderLicenseLink(license) + ') license.'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ${data.description}
`;
}

module.exports = generateMarkdown;
