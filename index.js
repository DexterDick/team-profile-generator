const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// link lib classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const generateHTML = require("./scr/generateHTML");

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

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter name of intern?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter intern name!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "id",
                message: "Intern ID number:",
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
                message: "Intern email address:",
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
                name: "school",
                message: "Name of intern's school:",
                validate: (schoolInput) => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter valid school name!");
                        return false;
                    }
                },
            },
        ])
        .then((answers) => {
            // Create new Intern to store answers
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );

            // push Intern into array for later use

            createTeam.push(intern);

            // call add teamTeam member

            addTeamMember();
        });
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter name of engineer?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter engineer name!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "id",
                message: "Engineer ID number:",
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
                message: "Engineer email address:",
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
                name: "gitHub",
                message: "Enter GitHub repository username:",
                validate: (gitHubInput) => {
                    if (gitHubInput) {
                        return true;
                    } else {
                        console.log(
                            "Please enter valid GitHub repository name!"
                        );
                        return false;
                    }
                },
            },
        ])
        .then((answers) => {
            // Create new Engineer to store answers
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.gitHub
            );

            // push engineer into array for later use

            createTeam.push(engineer);

            // call add teamTeam member

            addTeamMember();
        });
}
// add team member function adds team members until we exit function
function addTeamMember() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "teamMemberChoice",
                message:
                    "Would you like to add an Engineer or Intern to the team?",
                choices: [
                    "Engineer",
                    "Intern",
                    "(Exit) finish building my team",
                ],
            },
        ])
        .then((answers) => {
            if (answers.teamMemberChoice === "Engineer") {
                addEngineer();
            } else if (answers.teamMemberChoice === "Intern") {
                addIntern();
            } else if (
                answers.teamMemberChoice === "(Exit) finish building my team"
            ) {
                // Exit and create html file pass data to generateHTML
                const htmlPageContent = generateHTML(createTeam);

                // write html conent to file

                fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
                    err
                        ? console.log(err)
                        : console.log("Successfully created index.html!")
                );
            }
        });
}
