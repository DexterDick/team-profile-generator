class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // method to return name
    getName() {
        return this.name;
    }

    // method to return id
    getId() {
        return this.id;
    }
    // method to return email
    getEmail() {
        return this.email;
    }

    // method to return role

    getRole() {
        return "Employee";
    }
}

// export employee lib

module.exports = Employee;
