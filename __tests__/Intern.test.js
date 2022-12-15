// import Manager class form lib
const Intern = require("../lib/Intern");

describe("Create Intern Object", () => {
    it("should creat a new Intern", () => {
        const intern = new Intern("Dexter", 25, "dexter@dexter.com", "UofT");
        expect(intern.school).toEqual("UofT");
    });
});

describe("School", () => {
    it("should return school or intern", () => {
        const intern = new Intern("Dexter", 25, "dexter@dexter.com", "UofT");
        expect(intern.getSchool()).toEqual("UofT");
    });
});

describe("Role", () => {
    it("should return role of intern", () => {
        const intern = new Intern("Dexter", 25, "dexter@dexter.com", "UofT");

        expect(intern.getRole()).toEqual("Intern");
    });
});
