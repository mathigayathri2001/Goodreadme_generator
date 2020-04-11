/* generate the Markdown for the readme */
function generateMarkdown(answers, link, url, image) {
  return `
  # Project Title:

  ![Badge](https://img.shields.io/static/v1?label=${answers.projecttitle}&message=projecttitle&color=success)
  
  ## *${answers.projecttitle}*

  # Project description:
  ### This section describe the project detail.

  ## *${answers.description}*
  
  # Table of Content

  * ### **[Installation](#installation)**

  * ### **[License](#license)** 

  * ### **[Usage](#usage)**

  * ### **[Test](#test)**

  * ### **[Usercontribution](#usercontribution)**

  * ### **[Question](#question)** 
  
  
  # Installation

  ## To install dependancies for readme appication, please use the following command
  ## *${answers.installation}*

  # License

  ## LIcense require for the project
  ![Badge](https://img.shields.io/static/v1?label=MIT&message=License&color=brightgreen)
  ![Badge](https://img.shields.io/static/v1?label=GPL-3.0&message=License&color=blueviolet)
  ![Badge](https://img.shields.io/static/v1?label=MPL-2.0&message=License&color=red)

  ## *${answers.license}*
  ## License link:"${link}"
  
  # Usage

  ## *${answers.usage}*

  # Test

  ## *${answers.test}*

  # Usercontribution

  ## *${answers.usercontribution}*

  # Question

  ${url}

  <img src= "${image}"/>
 
`
}

/* assign the generateMarkDown into the export module */
module.exports = {generateMarkdown:generateMarkdown}
