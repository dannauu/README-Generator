function generateMarkdown(answers) {
  return `
  # Title
  ${answers.ProjectName}

  ## Description
  ${answers.Description}

  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.Usage}

  ## License
  ${answers.License}

  ## Contribution
  ${answers.Contribute}

  ## Tests
  ${answers.Tests}

  ## Github Username
  ${answers.Username}

  ## Github Repository
  ${answers.Repository}
  `;
}
module.exports = generateMarkdown;
