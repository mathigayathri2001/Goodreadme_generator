/* Declaration of modules include in the readme application */

const fs = require('fs')
const inquirer = require('inquirer')
const api = require('./utils/api.js')
const markDown = require('./utils/generateMarkdown.js')

/* Declaration of prompt for the questions used in the inquirer module */
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "projecttitle",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project descrption?"
    },
    {
        type: "input",
        name: "installation",
        message: "What is the installation instruction required for the project?",
        default: "npm i"
    },
    {
        type: "list",
        name: "license",
        message: "What type of licence required?",
        choices: ["MIT", "GPL-3.0", "MPL-2.0"]
    },
    {
        type: "input",
        name: "test",
        message: "What is the require command for testing?"
    },
    {
        type: "input",
        name: "usercontribution",
        message: "What does user need to know about contribution of the repo?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does user need to know about usage 0f the repo?"
    }
];

let link;

/* Function to write the readme data into the generate readme file */
function writeToFile(fileName, readMeData) {
    fs.writeFile(fileName, readMeData, function (err) {
        if (err) {
            console.log(err)
        }
        console.log('readme generated!')
    })
}

/* Init function receives the answers from inquirer and call the repo API to get the user information */
function init() {
    inquirer.
        prompt(questions)
        .then(function (answers) {
            const username = answers.username

            /* Call the repo API to get the user information */
            api.getUser(username)
                .then(function (userData) {
                    let url = userData.html_url
                    let image = userData.avatar_url
                    //console.log(userData)

                    /* Get the link for the license based on user answer */
                    if (answers.license === "MIT") {
                        link = "https://choosealicense.com/licenses/mit/"

                    } else if (answers.license === "MPL-2.0") {
                        link = "https://choosealicense.com/licenses/mpl-2.0/"
                    } else if (answers.license === "GPL-3.0") {
                        link = "https://choosealicense.com/licenses/gpl-3.0/"
                    }
                    //console.log(link)

                    /* Call the markDown module and generate the markDown */
                    const readmeData = markDown.generateMarkdown(answers, link, url, image)

                    /* Call whte writeToFile and create the GenerateReadme.md */
                    writeToFile("GenerateReadme.md", readmeData)
                })
        })
}

/* Call the Init function to perform queston and answers from the user */
init()

