//import Employee class from lib
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // inhearet Employee constructor
        super(name, id, email);

        this.school = this.school;
    }

    getSchool() {
        return this.school;
    }

    // Overridden to return 'Intern'
    getRole() {
        return "Intern";
    }
}

// Exports iterm lib
module.exports = Intern;
