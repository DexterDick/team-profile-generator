// import Employee lib class
const Employee = require("./Employee");

// Manager extends Employee lib class

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // passed form Employee constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // Overridden to return 'Manager'

    getRole() {
        return "Manager";
    }
}

// export Employee lib

module.exports = Manager;
