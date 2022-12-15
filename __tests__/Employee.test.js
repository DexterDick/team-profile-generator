const Employee = require("../lib/Employee");

describe("Create Employee Object", () => {
    it("should creat a new employee", () => {
        const employee = new Employee("Dexter", 25, "dexter@dexter.com");
        expect(employee.name).toEqual("Dexter");
        expect(employee.id).toEqual(25);
        expect(employee.email).toEqual("dexter@dexter.com");
    });
});

describe("Employee name", () => {
    it("should retun employee name", () => {
        const employee = new Employee("Dexter", 25, "dexter@dexter.com");
        expect(employee.getName()).toEqual("Dexter");
    });
});
describe("Employee ID", () => {
    it("should return employee ID", () => {
        const employee = new Employee("Dexter", 25, "dexter@dexter.com");
        expect(employee.getId()).toEqual(25);
    });
});

describe("Employee address", () => {
    it("should return employee email", () => {
        const employee = new Employee("Dexter", 25, "dexter@dexter.com");
        expect(employee.getEmail()).toEqual("dexter@dexter.com");
    });
});

describe("Employee role", () => {
    it("should return employee role", () => {
        const employee = new Employee("Dexter", 25, "dexter@dexter.com");
        expect(employee.getRole()).toEqual("Employee");
    });
});
