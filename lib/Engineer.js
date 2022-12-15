// import Employee lib
const Employee = require("./Employee");

// Engineer extends Employee lib
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = this.github;
    }

    getGithub() {
        return this.getGithub;
    }

    // Overridden to return 'Engineer'
    getRole() {
        return "Engineer";
    }
}

// export Engineer lib
module.exports = Engineer;
