const fs = require('fs')
const inquirer = require('inquirer')
const api = require('./utils/api.js')
const markDown = require('./utils/generateMarkdown.js')




const questions = [
    {
        type:"input",
        name: "username",
        message : "What is your Github username?"
    },
    {
        type:"input",
         name: "projecttitle",
         message : "What is your project name?"

    },
    {
        type:"input",
         name: "description",
         message : "What is your project descrption?"

    },
    {
        type:"input",
         name: "installation",
         message : "What is the installation instruction required for the project?"

    },
    {
        type:"list",
         name: "LIcense",
         message : "What type of licence required?",
         choices : ['MIT','GPL 3.0','BSD 3.0']

    },
    {
        type:"input",
         name: "Test",
         message : "What is the require command for testing?"

    }

];

function writeToFile (fileName, readMeData) {

    fs.writeFile(fileName, readMeData, function (err) {
        if (err) {
          console.log(err)
        }
      
        console.log('Success!')
      })
      

}

function init () {
    inquirer.
    prompt(questions)
    .then (function(answers) {
        const username = answers.username
        api.getUser(username)
           .then(function(userData){
              let url = userData.html_url
              let image = userData.avatar_url
               console.log(userData)

               const readmeData = markDown.generateMarkdown(answers,url,image)
               writeToFile("GenerateReadme.md",readmeData)


           })
        
        
    })
 
 

}
init()

