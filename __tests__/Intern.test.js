// import Manager class form lib
const Intern = require("../lib/Intern");

const intern = new Intern("Dexter", 25, "dexter@dexter.com", "UofT");
describe("Create Intern Object", () => {
    it("should creat a new Intern", () => {
        expect(intern.school).toEqual("UofT");
    });
});

describe("School", () => {
    it("should return school or intern", () => {
        expect(intern.getSchool()).toEqual("UofT");
    });
});

describe("Role", () => {
    it("should return role of intern", () => {
        expect(intern.getRole()).toEqual("Intern");
    });
});
