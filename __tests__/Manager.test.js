// import Manager class form lib
const Manager = require("../lib/Manager");
const manager = new Manager("Dexter", 25, "dexter@dexter.com", 50);

describe("Create Manager Object", () => {
    it("should creat a new manager", () => {
        expect(manager.officeNumber).toEqual(50);
    });
});

describe("Manager role", () => {
    it("should return employee role", () => {
        expect(manager.getRole()).toEqual("Manager");
    });
});
