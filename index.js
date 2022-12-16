const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// link lib classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// Holds team members to be used to generate Html;
const createTeam = [];

(function init() {
    // start app
})();

function addManager() {}

function addTeamMember() {}

function addIntern() {}

function addEngineer() {}

function creatFile() {
    // use to generate html file
}

// ├── __tests__/             //jest tests
// │   ├── Employee.test.js
// │   ├── Engineer.test.js
// │   ├── Intern.test.js
// │   └── Manager.test.js
// ├── dist/                  // rendered output (HTML) and CSS style sheet
// ├── lib/                   // classes
// ├── src/                   // template helper code
// ├── .gitignore             // indicates which folders and files Git should ignore
// ├── index.js               // runs the application
// └── package.json
