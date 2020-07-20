const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");



var profilePic = "";

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
  },
  {
      type: "input",
      name: "description",
      message: "Please provide a brief description of your project?"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the instructions for installation?"
},
  {
      type: "input",
      name: "usage",
      message: "What is the usage of this project?"
  },
  {
      type: "list",
      name: "licenses",
      message: "What licenses, if any, did you use?",
      choices: ["MIT", "ISC", "None"]
  
  },
  {
      type: "input",
      name: "contributors",
      message: "Who were the contributors on this project?"
  },
  {
      type: "input",
      name: "tests",
      message: "What are, if any, some of the frameworks you used for testing?"
  },
  {
      type: "input",
      name: "githubemail",
      message: "What is your github email?"
  },
  {
    type: "input",
    name: "githubusername",
    message: "What is your github username?",
  },
];

function promptquestions(data) {
  console.log(data);
  axios
    .get(`https://api.github.com/user/${data.githubusername}`)
    .then(function (res) {
      profilePic = res.data.avatar_url;
      console.log(res)
      if (profilePic) {
        return true;
      } else {
        return "Incorrect githubusername";
      }
    })
    .catch(function (err) {
      return "Incorrect githubusername";
    });
}

// FUNCTION FOR USER PROMPTS? //
function init() {
  inquirer.prompt(questions).then(function (answers) {
    var newfile = "README.md";
    var md = generateMarkdown(answers);

    writeFileAsync(newfile, md);
  });
}

// FUNCTION TO INITIALIZE USERPROMPT FUNCTION //
init();