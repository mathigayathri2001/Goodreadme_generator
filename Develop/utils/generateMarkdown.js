function generateMarkdown(answers,link,url,image ){
  return  `
  # Project Title:
  ${answers.projecttitle}

  # Project description:
  ${answers.description}

   # Table of Content

  * [Installation](#installation)

  * [License](#license) 

  * [Usage](#usage)

  * [test](#test) 

  * [usercontribution](#usercontribution) 

  * [question](#question) 
  
  
## Installation
To install dependancies for readme appication, please use the following command
 ${answers.installation}

 ## License
 ![Badge](https://img.shields.io/static/v1?label=MIT&message=License&color=brightgreen)
 ![Badge](https://img.shields.io/static/v1?label=GPL-3.0&message=License&color=blueviolet)
 ![Badge](https://img.shields.io/static/v1?label=MPL-2.0&message=License&color=red)


 ${answers.license}
 License link:"${link}"
  

 ## Usage

 ${answers.usage}

 ## test
 ${answers.test}

## usercontribution
 ${answers.usercontribution}

 ## question
 ${url}


 <img src= "${image}"/>
 
`
}

module.exports = {generateMarkdown:generateMarkdown}


// function generateMarkdown (data) {
//   return `
// # ${data.title}

// `
// }

// module.exports = generateMarkdown
