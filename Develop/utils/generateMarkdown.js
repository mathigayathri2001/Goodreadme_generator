function generateMarkdown(answers,url,image) {
  return  `
  #ProjectTitle:

###  ${answers.projecttitle}

# ${answers.description}
# ${answers.installation}
# ${answers.License}
# ${answers.test}

# ${url}

# ${image}

`
}

module.exports = {generateMarkdown:generateMarkdown}


// function generateMarkdown (data) {
//   return `
// # ${data.title}

// `
// }

// module.exports = generateMarkdown
