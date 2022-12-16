// import Engineer class form lib
const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Dexter", 25, "dexter@dexter.com", "DexterDick");

describe("Create Engineer Object", () => {
    it("should creat a new Engineer", () => {
        expect(engineer.gitHub).toEqual("DexterDick");
    });
});

describe("github", () => {
    it("should return github address of engineer", () => {
        expect(engineer.gitHub).toEqual("DexterDick");
    });
});

describe("Role", () => {
    it("should return role of engineer", () => {
        expect(engineer.getRole()).toEqual("Engineer");
    });
});
