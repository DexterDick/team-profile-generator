// import Manager class form lib
const Manager = require("../lib/Manager");

describe("Create Manager Object", () => {
    it("should creat a new manager", () => {
        const manager = new Manager("Dexter", 25, "dexter@dexter.com", 50);
        expect(manager.officeNumber).toEqual(50);
    });
});

describe("Manager role", () => {
    it("should return employee role", () => {
        const manager = new Manager("Dexter", 25, "dexter@dexter.com", 50);
        expect(manager.getRole()).toEqual("Manager");
    });
});
