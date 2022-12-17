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
    addManager();
})();

function addManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter team manager name?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter team manager's name!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "id",
                message: "Team Manager's ID number:",
                validate: (idInput) => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter number for Id!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "email",
                message: "Team Manager's email address:",
                validate: (emailInput) => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log(
                            "Please enter valid email eg. dex@gmail.com"
                        );
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Team Manager's office number:",
                validate: (officeNumInput) => {
                    if (officeNumInput) {
                        return true;
                    } else {
                        console.log("Please enter valid office number!");
                        return false;
                    }
                },
            },
        ])
        .then((answers) => {
            // Create new manager to store answers
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );

            // push manager into array for later use

            createTeam.push(manager);

            // call add teamTeam member

            addTeamMember();
        });
}

function addTeamMember() {
    console.log(createTeam);
}

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
