const Employee = require("../lib/Employee");

const employee = new Employee("Dexter", 25, "dexter@dexter.com");
describe("Create Employee Object", () => {
    it("should creat a new employee", () => {
        expect(employee.name).toEqual("Dexter");
        expect(employee.id).toEqual(25);
        expect(employee.email).toEqual("dexter@dexter.com");
    });
});

describe("Employee name", () => {
    it("should retun employee name", () => {
        expect(employee.getName()).toEqual("Dexter");
    });
});
describe("Employee ID", () => {
    it("should return employee ID", () => {
        expect(employee.getId()).toEqual(25);
    });
});

describe("Employee address", () => {
    it("should return employee email", () => {
        expect(employee.getEmail()).toEqual("dexter@dexter.com");
    });
});

describe("Employee role", () => {
    it("should return employee role", () => {
        expect(employee.getRole()).toEqual("Employee");
    });
});
