// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Mozilla 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'Mozilla 2.0':
      return '[Mozilla 2.0](https://opensource.org/licenses/MPL-2.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `## License
      
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
    case 'Apache 2.0':
      return `## License
      
This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).`;
    case 'Mozilla 2.0':
      return `## License
      
This project is licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).`;
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
