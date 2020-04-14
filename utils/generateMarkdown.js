/* generate the Markdown for the readme */
function generateMarkdown(answers, link, url, image) {
  return `
  # Project Title:

  ![Badge](https://img.shields.io/static/v1?label=${answers.projecttitle}&message=projecttitle&color=blueviolet)
  
  ## *${answers.projecttitle}*

  # Project description:
  ### This section describe the project detail.

  ### *${answers.description}*
  
  # Table of Content

  * ### **[Installation](#installation)**

  * ### **[License](#license)** 

  * ### **[Usage](#usage)**

  * ### **[Test](#test)**

  * ### **[Usercontribution](#usercontribution)**

  * ### **[Question](#question)** 
  
  
  # Installation

  ### To install dependancies for readme appication, please use the following command
  ### *${answers.installation}*

  # License

  ## LIcense require for the project
  ![Badge](https://img.shields.io/static/v1?label=${answers.license}&message=License&color=brightgreen)
  
  ### *${answers.license}*
  ### License link:"${link}"
  
  # Usage

  ### *${answers.usage}*

  # Test

  ### *${answers.test}*

  # Usercontribution

  ### *${answers.usercontribution}*

  # Question
  ### If there is any question, please contact us in the follwing URL.

  ${url}

  <img src= "${image}"/>
 
`
}

/* assign the generateMarkDown into the export module */
module.exports = {generateMarkdown:generateMarkdown}
